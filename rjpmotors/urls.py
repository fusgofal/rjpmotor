from django.conf.urls import patterns, include, url
from django.conf  import settings
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'rjpmotors.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('apps.app1.urls')),
    url(r'^fotos/(?P<path>.*)$','django.views.static.serve',
    		{'document_root':settings.MEDIA_ROOT,}
    	),
    url('', include('social.apps.django_app.urls', namespace = 'social'))
)
