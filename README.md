# 登录鉴权

1. 前端鉴权
   当用户访问需要登录权限的页面地址时，前端判断本地是否存有用户信息数据，如果有，则认为是登录了的
   —— 路由守卫

2. 后端鉴权
   1. 前端输入正确的账号密码给到后端
   2. 后端检验账号密码合法性后，用该账号信息生成一个加密的令牌(token)，并返回给前端保存
   3. 前端接下来所有的接口请求，全部需要带上这个token给后端
   4. 后端校验token的合法性来判断此时用户是否登录
