//地图
$(function () {
    //地图
    // 1、生成地图
    var map = new BMap.Map("maps");

    // 2、设置中心点坐标和缩放比例
    var oPoint=new BMap.Point(113.287036, 22.760993);
    map.centerAndZoom(oPoint, 15);
    // 3、添加标注
    var marker = new BMap.Marker(oPoint);   // 创建标注
    map.addOverlay(marker);                 // 添加标注
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
    map.enableScrollWheelZoom(true);
});