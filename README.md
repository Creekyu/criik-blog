# 全栈 criik-blog（开发中）

仿 VuePress Theme Hope 主题利用 React 进行开发
<br>
![图片](./front-end/src/assets/images/show.png)

# Sever 端

1. 实际上整体是以链式结构进行的，调用 next 实际是调用下一个中间件，每一个中间件都处于链条中的一环，是有先后顺序的
2. 利用 protect 中间件，在验证过程中在 req 中存放 user，后续操作可从 req 中读取 user 来保证此次操作必定是针对该用户的操作
3. 利用 setTimeout 来设置 session 销毁时间
4. 对 async 函数进行封装
   ```js
   module.exports = (fn) => (req, res, next) => {
     // 注意这里req,res是形参，是上面传下来的
     fn(req, res, next).catch(next);
   };
   // 这里传入的函数是上面的fn
   // getUser = (req, res, next) => {fn(req,res,next).catch(next)}
   // 当该方法被调用根据传入的req,res,next执行内部fn(req,res,next).catch(next)
   exports.getUser = catchAsync(async (req, res, next) => {});
   ```
5. 错误处理利用 appError + errorController + catchAsync 实现自动错误处理
   - 基本流程：
     1. 错误出现时，return next(new AppError(message,status_code))
     2. 错误被 catch 后由 next 将错误进行传递
     3. 当传递到全局错误处理中间件时在定义的中间件中进行处理(errorController 中暴露的回调函数)
6. 使用 config.env 配置一些全局属性，例如开发环境，在不同环境下执行不同代码
7. 关于数据库加密
   - 在 mongodb/bin 内的 cfg 文件内设置
     > security:<br>
     > authorization: enabled
   - 默认全数据库管理员账号:admin pwd:123456
   - 使用该管理员账户登录后创建其他数据库的子角色
     ```js
     db.createUser({
       user: "criiky0",
       pwd: "123456",
       roles: [
         {
           role: "readWrite",
           db: "criik-blog",
         },
       ],
     });
     ```
   - 给其他数据库添加验证账户时，非 admin db 使用 readWrite 角色，因为子 db 没有 root 等角色
8. 文件、图片上传：multer+sharp

# 前端

1. 安装 eslint 步骤:
   > npm i eslint -D <br/>
   > npx eslint --init <br/>
   > 注意在选择 eslint 初始化选项时将 node 和 browser 规范全选 <br/>
   > 第一个选项选第二个，带 find problems 就行，第三个会大面积报错
2. 配置 prettier:

   > yarn add prettier eslint-config-prettier eslint-plugin-prettier -D <br/>

   ```js
       // .eslintrc.json
       extends: [
           // 其他配置
           "plugin:prettier/recommended" // 增加项
       ],
       plugins: [
           // 其他配置
           "prettier"  // 增加项
       ],

       // .prettierrc
       {
           // 超过最大值换行
           "printWidth": 120,
           // 缩进字节数
           "tabWidth": 2,
           // 缩进不使用tab, 使用空格
           "useTabs": false,
           // 使用单引号代替双引号
           "singleQuote": true,
           // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
           "proseWrap": "preserve",
           //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid: 省略括号
           "arrowParens": "avoid"
       }
   ```

3. react 项目中也可以 env 来配置全局变量
   ```js
       // .env
       // 必须以REACT_APP_开头否则失效
       REACT_APP_THEME_COLOR =
   ```
4. json 转化为数组格式

   ```js
   Object.values(response.data); // 仅转化value

   // 转化key和value
   const list: emojiObj[] = [];
   Object.entries(response.data).map(([key, value]) => {
     list.push({ key, value });
   });
   ```

5. 关于全局路径配置
   ```js
    // tsconfig.json
    "baseUrl": ".",
    "paths": { // 注意是paths不是path，在这找了半天bug
        "@/*": [
        "src/*"
        ]
    }
    // craco.config.js
    const path = require('path');
    const resolve = dir => path.resolve(__dirname, dir);
    module.exports = {
        webpack: {
            alias: {
            '@': resolve('src'),
            },
        },
    };
   ```
6. ts 里用 react-redux 的 hook 时，提前声明类别并暴露声明类别后的 hook
   ```js
   export type RootState = ReturnType<typeof store.getState>;
   export type AppDispatch = typeof store.dispatch;
   export const useAppDispatch: () => AppDispatch = useDispatch;
   export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
   ```
7. react 内设背景需要先将背景图片引入
   ```js
        import img from '@/assets/images/blog-icon.png'
        style={{ backgroundImage: `url(${img})` }}
   ```
8. react 内响应式布局见 ViewportProvider 组件（利用 context，全局包裹该组件，获取窗口大小），context可以让子元素获取传入的value，该value使用useContext(context名)即可获得，可以用改特性在Provider内部存放一些全局要用的功能和数据
9. 关于滚动条，如过要让一个子元素在其父元素内滚动，需要同时设置其父元素以及自身的高度，而且自身高度要大于父元素，否则无法产生滚动条
10. 用一个组件存放 antd icons，通过 context 让所有组件能够获取
11. 使用@reduxjs/toolkit 时利用 redux-persist 持久化的配置

    ```js
    //持久存储
    import {
      persistStore,
      persistReducer,
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
    } from "redux-persist";
    import storage from "redux-persist/lib/storage";

    const reducers = combineReducers({
      emoji,
      chosenList,
    });

    const persistConfig = {
      key: "root",
      storage: storage,
      blacklist: [],
    };
    const persistReducers = persistReducer(persistConfig, reducers);

    const store = configureStore({
      reducer: persistReducers,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });

    const persistor = persistStore(store);
    ```

12. axios 封装
13. axios 请求回图片需要利用filereader进行处理转化为url可作为背景图
    ```js
    avatarAjax(user.avatar)
        .then(response => {
            const reader = new FileReader();
            reader.onload = e => {
                if (e.target) setAvatar(e.target.result as string);
            };
            reader.readAsDataURL(response);
        })
        .catch(err => {
            console.log(err.message);
        });
    ```
14. react严格模式包裹antd的布局组件会报错，包裹routes组件就行
15. 如果直接在标签上加style，这时如果状态发生改变，style被应用，如果该标签有动效css，则会被覆盖，最好的办法是替换两套style，然后利用动画进行设置，但是这样巨麻烦，我这里利用原生js做动效了，原生js设置的不会被覆盖掉，可以有动画，而且保证其展开大小一定是元素包裹大小，如果定义动画就无法知道包裹大小是多少
    ```js
        const div = document.getElementById('change-form-box-anime') as HTMLElement;
        // 如果打开就设置为scrollHeight否则为0
        if (state) div.style.height = div.scrollHeight + 'px';
        else div.style.height = '0';
    ```