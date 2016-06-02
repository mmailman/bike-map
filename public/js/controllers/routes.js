'use strict';

page('/', mapController.index);
page('/stats', statController.index, ChartController.chartRender);
page('/about', aboutController.index);
page();
