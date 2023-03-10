from django_filters import rest_framework as filters
from .models import Job
from django.db.models import Q



class JobsFilter(filters.FilterSet):
    min_salary = filters.NumberFilter(field_name="salary" or 0, lookup_expr='gte')
    max_salary = filters.NumberFilter(field_name="salary" or 1000000, lookup_expr='lte')
    keyword = filters.CharFilter(method='customfilter')
    location = filters.CharFilter(field_name='address', lookup_expr='icontains')
    class Meta:
        model = Job
        fields = ('education', 'jobType', 'experience', 'min_salary', 'max_salary', 'keyword', 'location')
    def customfilter(self, queryset, name, value):
        print("name", name)
        return queryset.filter(Q(title__icontains =value )| Q(description__icontains=value))


# class JobsFilter(filters.FilterSet):

#     # keyword = filters.CharFilter(field_name='title', lookup_expr='icontains')
#     # location = filters.CharFilter(field_name='address', lookup_expr='icontains')
#     # min_salary = filters.NumberFilter(field_name="salary" or 0, lookup_expr='gte')
#     # max_salary = filters.NumberFilter(field_name="salary" or 1000000, lookup_expr='lte')

#     class Meta:
#         model = Job
#         fields = ('education', 'jobType', 'experience')