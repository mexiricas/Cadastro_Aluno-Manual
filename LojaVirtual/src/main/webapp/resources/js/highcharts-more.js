
(function(n,G){function L(a,b,c){this.init.call(this,a,b,c)}var Q=n.arrayMin,R=n.arrayMax,s=n.each,I=n.extend,t=n.merge,S=n.map,o=n.pick,B=n.pInt,p=n.getOptions().plotOptions,i=n.seriesTypes,u=n.extendClass,M=n.splat,r=n.wrap,N=n.Axis,z=n.Tick,J=n.Point,T=n.Pointer,U=n.CenteredSeriesMixin,A=n.TrackerMixin,w=n.Series,y=Math,E=y.round,C=y.floor,O=y.max,V=n.Color,v=function(){};I(L.prototype,{init:function(a,b,c){var d=this,e=d.defaultOptions;d.chart=b;d.options=a=t(e,b.angular?{background:{}}:void 0,
a);(a=a.background)&&s([].concat(M(a)).reverse(),function(a){var b=a.backgroundColor,k=c.userOptions,a=t(d.defaultBackgroundOptions,a);if(b)a.backgroundColor=b;a.color=a.backgroundColor;c.options.plotBands.unshift(a);k.plotBands=k.plotBands||[];k.plotBands!==c.options.plotBands&&k.plotBands.unshift(a)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,
"#FFF"],[1,"#DDD"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var H=N.prototype,z=z.prototype,W={getOffset:v,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:v,setCategories:v,setTitle:v},P={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},
zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){a=this.options=t(this.defaultOptions,this.defaultRadialOptions,a);if(!a.plotBands)a.plotBands=[]},getOffset:function(){H.getOffset.call(this);this.chart.axisOffset[this.side]=0;this.center=this.pane.center=
U.getCenter.call(this.pane)},getLinePath:function(a,b){var c=this.center,b=o(b,c[2]/2-this.offset);return this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],b,b,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){H.setAxisTranslation.call(this);if(this.center)this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:
0},beforeSetTickPositions:function(){this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){H.setAxisSize.call(this);if(this.isRadial){this.center=this.pane.center=n.CenteredSeriesMixin.getCenter.call(this.pane);if(this.isCircular)this.sector=this.endAngleRad-this.startAngleRad;this.len=this.width=this.height=this.center[2]*o(this.sector,1)/2}},getPosition:function(a,b){return this.postTranslate(this.isCircular?this.translate(a):0,o(this.isCircular?
b:this.translate(a),this.center[2]/2)-this.offset)},postTranslate:function(a,b){var c=this.chart,d=this.center,a=this.startAngleRad+a;return{x:c.plotLeft+d[0]+Math.cos(a)*b,y:c.plotTop+d[1]+Math.sin(a)*b}},getPlotBandPath:function(a,b,c){var d=this.center,e=this.startAngleRad,f=d[2]/2,h=[o(c.outerRadius,"100%"),c.innerRadius,o(c.thickness,10)],k=/%$/,g,j=this.isCircular;this.options.gridLineInterpolation==="polygon"?d=this.getPlotLinePath(a).concat(this.getPlotLinePath(b,!0)):(a=Math.max(a,this.min),
b=Math.min(b,this.max),j||(h[0]=this.translate(a),h[1]=this.translate(b)),h=S(h,function(a){k.test(a)&&(a=B(a,10)*f/100);return a}),c.shape==="circle"||!j?(a=-Math.PI/2,b=Math.PI*1.5,g=!0):(a=e+this.translate(a),b=e+this.translate(b)),d=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],h[0],h[0],{start:Math.min(a,b),end:Math.max(a,b),innerR:o(h[1],h[0]-h[2]),open:g}));return d},getPlotLinePath:function(a,b){var c=this,d=c.center,e=c.chart,f=c.getPosition(a),h,k,g;c.isCircular?g=["M",d[0]+
e.plotLeft,d[1]+e.plotTop,"L",f.x,f.y]:c.options.gridLineInterpolation==="circle"?(a=c.translate(a))&&(g=c.getLinePath(0,a)):(s(e.xAxis,function(a){a.pane===c.pane&&(h=a)}),g=[],a=c.translate(a),d=h.tickPositions,h.autoConnect&&(d=d.concat([d[0]])),b&&(d=[].concat(d).reverse()),s(d,function(f,b){k=h.getPosition(f,a);g.push(b?"L":"M",k.x,k.y)}));return g},getTitlePosition:function(){var a=this.center,b=this.chart,c=this.options.title;return{x:b.plotLeft+a[0]+(c.x||0),y:b.plotTop+a[1]-{high:0.5,middle:0.25,
low:0}[c.align]*a[2]+(c.y||0)}}};r(H,"init",function(a,b,c){var l;var d=b.angular,e=b.polar,f=c.isX,h=d&&f,k,g;g=b.options;var j=c.pane||0;if(d){if(I(this,h?W:P),k=!f)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else if(e)I(this,P),this.defaultRadialOptions=(k=f)?this.defaultRadialXOptions:t(this.defaultYAxisOptions,this.defaultRadialYOptions);a.call(this,b,c);if(!h&&(d||e)){a=this.options;if(!b.panes)b.panes=[];this.pane=(l=b.panes[j]=b.panes[j]||new L(M(g.pane)[j],b,this),j=l);j=j.options;
b.inverted=!1;g.chart.zoomType=null;this.startAngleRad=b=(j.startAngle-90)*Math.PI/180;this.endAngleRad=g=(o(j.endAngle,j.startAngle+360)-90)*Math.PI/180;this.offset=a.offset||0;if((this.isCircular=k)&&c.max===G&&g-b===2*Math.PI)this.autoConnect=!0}});r(z,"getPosition",function(a,b,c,d,e){var f=this.axis;return f.getPosition?f.getPosition(c):a.call(this,b,c,d,e)});r(z,"getLabelPosition",function(a,b,c,d,e,f,h,k,g){var j=this.axis,m=f.y,l=20,i=f.align,x=(j.translate(this.pos)+j.startAngleRad+Math.PI/
2)/Math.PI*180%360;j.isRadial?(a=j.getPosition(this.pos,j.center[2]/2+o(f.distance,-25)),f.rotation==="auto"?d.attr({rotation:x}):m===null&&(m=j.chart.renderer.fontMetrics(d.styles.fontSize).b-d.getBBox().height/2),i===null&&(j.isCircular?(this.label.getBBox().width>j.len*j.tickInterval/(j.max-j.min)&&(l=0),i=x>l&&x<180-l?"left":x>180+l&&x<360-l?"right":"center"):i="center",d.attr({align:i})),a.x+=f.x,a.y+=m):a=a.call(this,b,c,d,e,f,h,k,g);return a});r(z,"getMarkPath",function(a,b,c,d,e,f,h){var k=
this.axis;k.isRadial?(a=k.getPosition(this.pos,k.center[2]/2+d),b=["M",b,c,"L",a.x,a.y]):b=a.call(this,b,c,d,e,f,h);return b});p.arearange=t(p.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}});i.arearange=u(i.area,{type:"arearange",pointArrayMap:["low","high"],
dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(a){var b=this.chart,c=this.xAxis.postTranslate(a.rectPlotX,this.yAxis.len-a.plotHigh);a.plotHighX=c.x-b.plotLeft;a.plotHigh=c.y-b.plotTop},getSegments:function(){var a=this;s(a.points,function(b){if(!a.options.connectNulls&&(b.low===null||b.high===null))b.y=null;else if(b.low===null&&b.high!==null)b.y=b.high});w.prototype.getSegments.call(this)},
translate:function(){var a=this,b=a.yAxis;i.area.prototype.translate.apply(a);s(a.points,function(a){var d=a.low,e=a.high,f=a.plotY;e===null&&d===null?a.y=null:d===null?(a.plotLow=a.plotY=null,a.plotHigh=b.translate(e,0,1,0,1)):e===null?(a.plotLow=f,a.plotHigh=null):(a.plotLow=f,a.plotHigh=b.translate(e,0,1,0,1))});this.chart.polar&&s(this.points,function(b){a.highToXY(b)})},getSegmentPath:function(a){var b,c=[],d=a.length,e=w.prototype.getSegmentPath,f,h;h=this.options;var k=h.step;for(b=HighchartsAdapter.grep(a,
function(a){return a.plotLow!==null});d--;)f=a[d],f.plotHigh!==null&&c.push({plotX:f.plotHighX||f.plotX,plotY:f.plotHigh});a=e.call(this,b);if(k)k===!0&&(k="left"),h.step={left:"right",center:"center",right:"left"}[k];c=e.call(this,c);h.step=k;h=[].concat(a,c);this.chart.polar||(c[0]="L");this.areaPath=this.areaPath.concat(a,c);return h},drawDataLabels:function(){var a=this.data,b=a.length,c,d=[],e=w.prototype,f=this.options.dataLabels,h=f.align,k=f.inside,g,j,m=this.chart.inverted;if(f.enabled||
this._hasPointLabels){for(c=b;c--;)if(g=a[c])if(j=k?g.plotHigh<g.plotLow:g.plotHigh>g.plotLow,g.y=g.high,g._plotY=g.plotY,g.plotY=g.plotHigh,d[c]=g.dataLabel,g.dataLabel=g.dataLabelUpper,g.below=j,m){if(!h)f.align=j?"right":"left";f.x=f.xHigh}else f.y=f.yHigh;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments);for(c=b;c--;)if(g=a[c])if(j=k?g.plotHigh<g.plotLow:g.plotHigh>g.plotLow,g.dataLabelUpper=g.dataLabel,g.dataLabel=d[c],g.y=g.low,g.plotY=g._plotY,g.below=!j,m){if(!h)f.align=j?"left":"right";
f.x=f.xLow}else f.y=f.yLow;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments)}f.align=h},alignDataLabel:function(){i.column.prototype.alignDataLabel.apply(this,arguments)},setStackedPoints:v,getSymbol:v,drawPoints:v});p.areasplinerange=t(p.arearange);i.areasplinerange=u(i.arearange,{type:"areasplinerange",getPointSpline:i.spline.prototype.getPointSpline});(function(){var a=i.column.prototype;p.columnrange=t(p.column,p.arearange,{lineWidth:1,pointRange:null});i.columnrange=u(i.arearange,{type:"columnrange",
translate:function(){var b=this,c=b.yAxis,d;a.translate.apply(b);s(b.points,function(a){var f=a.shapeArgs,h=b.options.minPointLength,k;a.tooltipPos=null;a.plotHigh=d=c.translate(a.high,0,1,0,1);a.plotLow=a.plotY;k=d;a=a.plotY-d;Math.abs(a)<h?(h-=a,a+=h,k-=h/2):a<0&&(a*=-1,k-=a);f.height=a;f.y=k})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:v,crispCol:a.crispCol,pointAttrToOptions:a.pointAttrToOptions,drawPoints:a.drawPoints,drawTracker:a.drawTracker,animate:a.animate,getColumnMetrics:a.getColumnMetrics})})();
p.gauge=t(p.line,{dataLabels:{enabled:!0,defer:!1,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});A={type:"gauge",pointClass:u(J,{setState:function(a){this.state=a}}),angular:!0,drawGraph:v,fixedBox:!0,forceDL:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var a=this.yAxis,b=this.options,c=a.center;this.generatePoints();s(this.points,function(d){var e=t(b.dial,d.dial),f=B(o(e.radius,
80))*c[2]/200,h=B(o(e.baseLength,70))*f/100,k=B(o(e.rearLength,10))*f/100,g=e.baseWidth||3,j=e.topWidth||1,m=b.overshoot,l=a.startAngleRad+a.translate(d.y,null,null,null,!0);m&&typeof m==="number"?(m=m/180*Math.PI,l=Math.max(a.startAngleRad-m,Math.min(a.endAngleRad+m,l))):b.wrap===!1&&(l=Math.max(a.startAngleRad,Math.min(a.endAngleRad,l)));l=l*180/Math.PI;d.shapeType="path";d.shapeArgs={d:e.path||["M",-k,-g/2,"L",h,-g/2,f,-j/2,f,j/2,h,g/2,-k,g/2,"z"],translateX:c[0],translateY:c[1],rotation:l};d.plotX=
c[0];d.plotY=c[1]})},drawPoints:function(){var a=this,b=a.yAxis.center,c=a.pivot,d=a.options,e=d.pivot,f=a.chart.renderer;s(a.points,function(b){var c=b.graphic,g=b.shapeArgs,e=g.d,m=t(d.dial,b.dial);c?(c.animate(g),g.d=e):b.graphic=f[b.shapeType](g).attr({stroke:m.borderColor||"none","stroke-width":m.borderWidth||0,fill:m.backgroundColor||"black",rotation:g.rotation}).add(a.group)});c?c.animate({translateX:b[0],translateY:b[1]}):a.pivot=f.circle(0,0,o(e.radius,5)).attr({"stroke-width":e.borderWidth||
0,stroke:e.borderColor||"silver",fill:e.backgroundColor||"black"}).translate(b[0],b[1]).add(a.group)},animate:function(a){var b=this;if(!a)s(b.points,function(a){var d=a.graphic;d&&(d.attr({rotation:b.yAxis.startAngleRad*180/Math.PI}),d.animate({rotation:a.shapeArgs.rotation},b.options.animation))}),b.animate=null},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);w.prototype.render.call(this);this.group.clip(this.chart.clipRect)},
setData:function(a,b){w.prototype.setData.call(this,a,!1);this.processData();this.generatePoints();o(b,!0)&&this.chart.redraw()},drawTracker:A&&A.drawTrackerPoint};i.gauge=u(i.line,A);p.boxplot=t(p.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-0.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},
whiskerLength:"50%",whiskerWidth:2});i.boxplot=u(i.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:v,translate:function(){var a=this.yAxis,b=this.pointArrayMap;i.column.prototype.translate.apply(this);s(this.points,function(c){s(b,function(b){c[b]!==null&&(c[b+"Plot"]=a.translate(c[b],0,1,0,1))})})},drawPoints:function(){var a=
this,b=a.options,c=a.chart.renderer,d,e,f,h,k,g,j,m,l,i,x,n,K,p,t,r,v,u,w,y,B,A,z=a.doQuartiles!==!1,F,D=a.options.whiskerLength;s(a.points,function(q){l=q.graphic;B=q.shapeArgs;x={};p={};r={};A=q.color||a.color;if(q.plotY!==G)if(d=q.pointAttr[q.selected?"selected":""],v=B.width,u=C(B.x),w=u+v,y=E(v/2),e=C(z?q.q1Plot:q.lowPlot),f=C(z?q.q3Plot:q.lowPlot),h=C(q.highPlot),k=C(q.lowPlot),x.stroke=q.stemColor||b.stemColor||A,x["stroke-width"]=o(q.stemWidth,b.stemWidth,b.lineWidth),x.dashstyle=q.stemDashStyle||
b.stemDashStyle,p.stroke=q.whiskerColor||b.whiskerColor||A,p["stroke-width"]=o(q.whiskerWidth,b.whiskerWidth,b.lineWidth),r.stroke=q.medianColor||b.medianColor||A,r["stroke-width"]=o(q.medianWidth,b.medianWidth,b.lineWidth),j=x["stroke-width"]%2/2,m=u+y+j,i=["M",m,f,"L",m,h,"M",m,e,"L",m,k],z&&(j=d["stroke-width"]%2/2,m=C(m)+j,e=C(e)+j,f=C(f)+j,u+=j,w+=j,n=["M",u,f,"L",u,e,"L",w,e,"L",w,f,"L",u,f,"z"]),D&&(j=p["stroke-width"]%2/2,h+=j,k+=j,F=/%$/.test(D)?y*parseFloat(D)/100:D/2,K=["M",m-F,h,"L",m+
F,h,"M",m-F,k,"L",m+F,k]),j=r["stroke-width"]%2/2,g=E(q.medianPlot)+j,t=["M",u,g,"L",w,g],l)q.stem.animate({d:i}),D&&q.whiskers.animate({d:K}),z&&q.box.animate({d:n}),q.medianShape.animate({d:t});else{q.graphic=l=c.g().add(a.group);q.stem=c.path(i).attr(x).add(l);if(D)q.whiskers=c.path(K).attr(p).add(l);if(z)q.box=c.path(n).attr(d).add(l);q.medianShape=c.path(t).attr(r).add(l)}})},setStackedPoints:v});p.errorbar=t(p.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
whiskerWidth:null});i.errorbar=u(i.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:i.arearange?i.arearange.prototype.drawDataLabels:v,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||i.column.prototype.getColumnMetrics.call(this)}});p.waterfall=t(p.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333",dataLabels:{inside:!0},states:{hover:{lineWidthPlus:0}}});
i.waterfall=u(i.column,{type:"waterfall",upColorProp:"fill",pointValKey:"y",translate:function(){var a=this.options,b=this.yAxis,c,d,e,f,h,k,g,j,m,l=a.threshold,X=a.stacking;i.column.prototype.translate.apply(this);g=j=l;d=this.points;for(c=0,a=d.length;c<a;c++){e=d[c];k=this.processedYData[c];f=e.shapeArgs;m=(h=X&&b.stacks[(this.negStacks&&k<l?"-":"")+this.stackKey])?h[e.x].points[this.index+","+c]:[0,k];if(e.isSum)e.y=k;else if(e.isIntermediateSum)e.y=k-j;h=O(g,g+e.y)+m[0];f.y=b.translate(h,0,1);
if(e.isSum)f.y=b.translate(m[1],0,1),f.height=Math.min(b.translate(m[0],0,1),b.len)-f.y;else if(e.isIntermediateSum)f.y=b.translate(m[1],0,1),f.height=Math.min(b.translate(j,0,1),b.len)-f.y,j=m[1];else{if(g!==0)f.height=k>0?b.translate(g,0,1)-f.y:b.translate(g,0,1)-b.translate(g-k,0,1);g+=k}f.height<0&&(f.y+=f.height,f.height*=-1);e.plotY=f.y=E(f.y)-this.borderWidth%2/2;f.height=O(E(f.height),0.001);e.yBottom=f.y+f.height;f=e.plotY+(e.negative?f.height:0);this.chart.inverted?e.tooltipPos[0]=b.len-
f:e.tooltipPos[1]=f}},processData:function(a){var b=this.yData,c=this.options.data,d,e=b.length,f,h,k,g,j,m;h=f=k=g=this.options.threshold||0;for(m=0;m<e;m++)j=b[m],d=c&&c[m]?c[m]:{},j==="sum"||d.isSum?b[m]=h:j==="intermediateSum"||d.isIntermediateSum?b[m]=f:(h+=j,f+=j),k=Math.min(h,k),g=Math.max(h,g);w.prototype.processData.call(this,a);this.dataMin=k;this.dataMax=g},toYData:function(a){if(a.isSum)return a.x===0?null:"sum";else if(a.isIntermediateSum)return a.x===0?null:"intermediateSum";return a.y},
getAttribs:function(){i.column.prototype.getAttribs.apply(this,arguments);var a=this,b=a.options,c=b.states,d=b.upColor||a.color,b=n.Color(d).brighten(0.1).get(),e=t(a.pointAttr),f=a.upColorProp;e[""][f]=d;e.hover[f]=c.hover.upColor||b;e.select[f]=c.select.upColor||d;s(a.points,function(f){if(!f.options.color)f.y>0?(f.pointAttr=e,f.color=d):f.pointAttr=a.pointAttr})},getGraphPath:function(){var a=this.data,b=a.length,c=E(this.options.lineWidth+this.borderWidth)%2/2,d=[],e,f,h;for(h=1;h<b;h++)f=a[h].shapeArgs,
e=a[h-1].shapeArgs,f=["M",e.x+e.width,e.y+c,"L",f.x,e.y+c],a[h-1].y<0&&(f[2]+=e.height,f[5]+=e.height),d=d.concat(f);return d},getExtremes:v,drawGraph:w.prototype.drawGraph});p.polygon=t(p.scatter,{marker:{enabled:!1}});i.polygon=u(i.scatter,{type:"polygon",fillGraph:!0,getSegmentPath:function(a){return w.prototype.getSegmentPath.call(this,a).concat("z")},drawGraph:w.prototype.drawGraph,drawLegendSymbol:n.LegendSymbolMixin.drawRectangle});p.bubble=t(p.scatter,{dataLabels:{formatter:function(){return this.point.z},
inside:!0,verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"});A=u(J,{haloPath:function(){return J.prototype.haloPath.call(this,this.shapeArgs.r+this.series.options.states.hover.halo.size)},ttBelow:!1});i.bubble=u(i.scatter,{type:"bubble",pointClass:A,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group",
"dataLabelsGroup"],bubblePadding:!0,zoneAxis:"z",pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(a){var b=this.options.marker,c=o(b.fillOpacity,0.5),a=a||b.fillColor||this.color;c!==1&&(a=V(a).setOpacity(c).get("rgba"));return a},convertAttribs:function(){var a=w.prototype.convertAttribs.apply(this,arguments);a.fill=this.applyOpacity(a.fill);return a},getRadii:function(a,b,c,d){var e,f,h,k=this.zData,g=[],j=this.options,m=j.sizeBy!=="width",
l=j.zThreshold,i=b-a;for(f=0,e=k.length;f<e;f++)h=k[f],j.sizeByAbsoluteValue&&(h=Math.abs(h-l),b=Math.max(b-l,Math.abs(a-l)),a=0),h===null?h=null:h<a?h=c/2-1:(h=i>0?(h-a)/i:0.5,m&&h>=0&&(h=Math.sqrt(h)),h=y.ceil(c+h*(d-c))/2),g.push(h);this.radii=g},animate:function(a){var b=this.options.animation;if(!a)s(this.points,function(a){var d=a.graphic,a=a.shapeArgs;d&&a&&(d.attr("r",1),d.animate({r:a.r},b))}),this.animate=null},translate:function(){var a,b=this.data,c,d,e=this.radii;i.scatter.prototype.translate.call(this);
for(a=b.length;a--;)c=b[a],d=e?e[a]:0,typeof d==="number"&&d>=this.minPxSize/2?(c.shapeType="circle",c.shapeArgs={x:c.plotX,y:c.plotY,r:d},c.dlBox={x:c.plotX-d,y:c.plotY-d,width:2*d,height:2*d}):c.shapeArgs=c.plotY=c.dlBox=G},drawLegendSymbol:function(a,b){var c=B(a.itemStyle.fontSize)/2;b.legendSymbol=this.chart.renderer.circle(c,a.baseline-c,c).attr({zIndex:3}).add(b.legendGroup);b.legendSymbol.isMarker=!0},drawPoints:i.column.prototype.drawPoints,alignDataLabel:i.column.prototype.alignDataLabel,
buildKDTree:v,applyZones:v});N.prototype.beforePadding=function(){var a=this,b=this.len,c=this.chart,d=0,e=b,f=this.isXAxis,h=f?"xData":"yData",k=this.min,g={},j=y.min(c.plotWidth,c.plotHeight),m=Number.MAX_VALUE,l=-Number.MAX_VALUE,i=this.max-k,x=b/i,n=[];s(this.series,function(b){var h=b.options;if(b.bubblePadding&&(b.visible||!c.options.chart.ignoreHiddenSeries))if(a.allowZoomOutside=!0,n.push(b),f)s(["minSize","maxSize"],function(a){var b=h[a],f=/%$/.test(b),b=B(b);g[a]=f?j*b/100:b}),b.minPxSize=
g.minSize,b.maxPxSize=g.maxSize,b=b.zData,b.length&&(m=o(h.zMin,y.min(m,y.max(Q(b),h.displayNegative===!1?h.zThreshold:-Number.MAX_VALUE))),l=o(h.zMax,y.max(l,R(b))))});s(n,function(a){var b=a[h],c=b.length,g;f&&a.getRadii(m,l,a.minPxSize,a.maxPxSize);if(i>0)for(;c--;)typeof b[c]==="number"&&(g=a.radii[c],d=Math.min((b[c]-k)*x-g,d),e=Math.max((b[c]-k)*x+g,e))});n.length&&i>0&&!this.isLog&&(e-=b,x*=(b+d-e)/b,s([["min","userMin",d],["max","userMax",e]],function(b){o(a.options[b[0]],a[b[1]])===G&&(a[b[0]]+=
b[2]/x)}))};(function(){function a(a,b,c){a.call(this,b,c);if(this.chart.polar)this.closeSegment=function(a){var b=this.xAxis.center;a.push("L",b[0],b[1])},this.closedStacks=!0}function b(a,b){var c=this.chart,g=this.options.animation,d=this.group,e=this.markerGroup,l=this.xAxis.center,i=c.plotLeft,n=c.plotTop;if(c.polar){if(c.renderer.isSVG)g===!0&&(g={}),b?(c={translateX:l[0]+i,translateY:l[1]+n,scaleX:0.001,scaleY:0.001},d.attr(c),e&&e.attr(c)):(c={translateX:i,translateY:n,scaleX:1,scaleY:1},
d.animate(c,g),e&&e.animate(c,g),this.animate=null)}else a.call(this,b)}var c=w.prototype,d=T.prototype,e;c.searchPointByAngle=function(a){var b=this.chart,c=this.xAxis.pane.center;return this.searchKDTree({clientX:180+Math.atan2(a.chartX-c[0]-b.plotLeft,a.chartY-c[1]-b.plotTop)*(-180/Math.PI)})};r(c,"buildKDTree",function(a){if(this.chart.polar)this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.kdDimensions=2;a.apply(this)});c.toXY=function(a){var b,c=this.chart,g=a.plotX;b=a.plotY;a.rectPlotX=
g;a.rectPlotY=b;b=this.xAxis.postTranslate(a.plotX,this.yAxis.len-b);a.plotX=a.polarPlotX=b.x-c.plotLeft;a.plotY=a.polarPlotY=b.y-c.plotTop;this.kdByAngle?(c=(g/Math.PI*180+this.xAxis.pane.options.startAngle)%360,c<0&&(c+=360),a.clientX=c):a.clientX=a.plotX};i.area&&r(i.area.prototype,"init",a);i.areaspline&&r(i.areaspline.prototype,"init",a);i.spline&&r(i.spline.prototype,"getPointSpline",function(a,b,c,g){var d,e,l,i,n,p,o;if(this.chart.polar){d=c.plotX;e=c.plotY;a=b[g-1];l=b[g+1];this.connectEnds&&
(a||(a=b[b.length-2]),l||(l=b[1]));if(a&&l)i=a.plotX,n=a.plotY,b=l.plotX,p=l.plotY,i=(1.5*d+i)/2.5,n=(1.5*e+n)/2.5,l=(1.5*d+b)/2.5,o=(1.5*e+p)/2.5,b=Math.sqrt(Math.pow(i-d,2)+Math.pow(n-e,2)),p=Math.sqrt(Math.pow(l-d,2)+Math.pow(o-e,2)),i=Math.atan2(n-e,i-d),n=Math.atan2(o-e,l-d),o=Math.PI/2+(i+n)/2,Math.abs(i-o)>Math.PI/2&&(o-=Math.PI),i=d+Math.cos(o)*b,n=e+Math.sin(o)*b,l=d+Math.cos(Math.PI+o)*p,o=e+Math.sin(Math.PI+o)*p,c.rightContX=l,c.rightContY=o;g?(c=["C",a.rightContX||a.plotX,a.rightContY||
a.plotY,i||d,n||e,d,e],a.rightContX=a.rightContY=null):c=["M",d,e]}else c=a.call(this,b,c,g);return c});r(c,"translate",function(a){var b=this.chart;a.call(this);if(b.polar&&(this.kdByAngle=b.tooltip&&b.tooltip.shared,!this.preventPostTranslate)){a=this.points;for(b=a.length;b--;)this.toXY(a[b])}});r(c,"getSegmentPath",function(a,b){var c=this.points;if(this.chart.polar&&this.options.connectEnds!==!1&&b[b.length-1]===c[c.length-1]&&c[0].y!==null)this.connectEnds=!0,b=[].concat(b,[c[0]]);return a.call(this,
b)});r(c,"animate",b);if(i.column)e=i.column.prototype,r(e,"animate",b),r(e,"translate",function(a){var b=this.xAxis,c=this.yAxis.len,d=b.center,e=b.startAngleRad,i=this.chart.renderer,l,n;this.preventPostTranslate=!0;a.call(this);if(b.isRadial){b=this.points;for(n=b.length;n--;)l=b[n],a=l.barX+e,l.shapeType="path",l.shapeArgs={d:i.symbols.arc(d[0],d[1],c-l.plotY,null,{start:a,end:a+l.pointWidth,innerR:c-o(l.yBottom,c)})},this.toXY(l),l.tooltipPos=[l.plotX,l.plotY],l.ttBelow=l.plotY>d[1]}}),r(e,"alignDataLabel",
function(a,b,d,e,j,i){if(this.chart.polar){a=b.rectPlotX/Math.PI*180;if(e.align===null)e.align=a>20&&a<160?"left":a>200&&a<340?"right":"center";if(e.verticalAlign===null)e.verticalAlign=a<45||a>315?"bottom":a>135&&a<225?"top":"middle";c.alignDataLabel.call(this,b,d,e,j,i)}else a.call(this,b,d,e,j,i)});r(d,"getCoordinates",function(a,b){var c=this.chart,d={xAxis:[],yAxis:[]};c.polar?s(c.axes,function(a){var e=a.isXAxis,f=a.center,i=b.chartX-f[0]-c.plotLeft,f=b.chartY-f[1]-c.plotTop;d[e?"xAxis":"yAxis"].push({axis:a,
value:a.translate(e?Math.PI-Math.atan2(i,f):Math.sqrt(Math.pow(i,2)+Math.pow(f,2)),!0)})}):d=a.call(this,b);return d})})()})(Highcharts);
