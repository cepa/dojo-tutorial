import time
import fabric.api as fapi
import fabric.contrib.files as ffiles

fapi.env.project_name = 'dojo-tutorial'
fapi.env.distfile = 'dist.tar.gz'
fapi.env.path = '/var/www'

fapi.env.user = 'root'
fapi.env.disable_known_hosts = True

@fapi.task
@fapi.parallel
def rollout():
    fapi.env.release = time.strftime('%Y%m%d%H%M%S')
    project_path = '%(path)s/%(project_name)s' % fapi.env
    release_path = project_path + '/' + fapi.env.release
    current_path = project_path + '/current'
    fapi.run('mkdir -p ' + release_path)
    fapi.put('%(distfile)s' % fapi.env, release_path)
    fapi.run('cd ' + release_path + ' && tar zxf %(distfile)s' % fapi.env)
    if (ffiles.exists(current_path)):
        fapi.run('cd ' + project_path + ' && unlink current')
    fapi.run('cd ' + project_path + ' && ln -s %(release)s current' % fapi.env)
    fapi.run('cd ' + release_path + ' && rm -f %(distfile)s' % fapi.env)
 
@fapi.task
@fapi.parallel
def purge():
    fapi.run('rm -rf %(path)s/%(project_name)s' % fapi.env)

if 'rollout' in fapi.env.tasks:
    fapi.local('rm -rf {}'.format(fapi.env.distfile))
    fapi.local('tar --exclude={} -zcf {} *'.format(fapi.env.distfile, fapi.env.distfile))
