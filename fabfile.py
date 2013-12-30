from fabric.api import *
from fabric.operations import *
from fabric.contrib.files import *

env.project_name = 'dojo-tutorial'
env.distfile = 'dist.tar.gz'
env.path = '/var/www'

@parallel
def uptime():
    run('uptime')

@parallel
def deploy():
    import time
    env.release = time.strftime('%Y%m%d%H%M%S')
    project_path = '%(path)s/%(project_name)s' % env
    release_path = project_path + '/' + env.release
    current_path = project_path + '/current'
    run('mkdir -p ' + release_path)
    put('%(distfile)s' % env, release_path)
    run('cd ' + release_path + ' && tar zxf %(distfile)s' % env)
    if (exists(current_path)):
        run('cd ' + project_path + ' && unlink current')
    run('cd ' + project_path + ' && ln -s %(release)s current' % env)
 
@parallel
def purge():
    run('rm -rf %(path)s/%(project_name)s' % env)

@parallel
def restart_phpfpm():
    run('/etc/init.d/php5-fpm restart')

