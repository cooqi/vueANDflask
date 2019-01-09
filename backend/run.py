
'''
    render_template 是渲染模板用的，这里我们用来返回 index.html
    flask_cors 用来解决跨域的问题
'''
from flask import Flask, request, session, redirect, url_for, render_template, make_response, jsonify
from flask_cors import CORS
from flasgger import Swagger,swag_from


# 通过 static_folder 指定静态资源路径，以便 index.html 能正确访问 CSS 等静态资源
# template_folder 指定模板路径，以便 render_template 能正确渲染 index.html
APP = Flask(
    __name__, static_folder="../dist/static", template_folder="../dist")

CORS(APP)
Swagger(APP)
#swagger展现api接口方法集合，访问/apidocs/即可

@APP.route("/")
def home():
    '''
        当在浏览器访问网址时，通过 render_template 方法渲染 dist 文件夹中的 index.html。
        页面之间的跳转交给前端路由负责，后端不用再写大量的路由
    '''
    return render_template('index.html')


@APP.route('/test', methods=['GET', 'POST'])
def test():
    ''' 这个API用来测试跨域 '''
    return 'success'


@APP.route('/login', methods=['POST'])
@swag_from('YMLS/login.yml')
def login():
  if request.method == 'POST':
    name=request.form['username']
    password = request.form['password']
    if name!='1' or password!='2':
        return jsonify({'code': 201, 'msg': '用户名或密码错误'})
    # 登录成功，则跳转到index页面

    return jsonify({'code': 200, 'token': "123456",'msg':''})

  # 登录失败，跳转到当前登录页面

  return jsonify({'code': 201,'msg':'登录失败','msg':''})

if __name__ == '__main__':
    # 开启 debug模式，这样我们就不用每更改一次文件，就重新启动一次服务
    # 设置 host='0.0.0.0'，让操作系统监听所有公网 IP
    # 也就是把自己的电脑作为服务器，可以让别人访问
    APP.run(port=9001,debug=True, host='192.168.0.85')