var map = new naver.maps.Map('map', {
  center: new naver.maps.LatLng(37.3595704, 127.105399), //지도의 초기 중심 좌표
  zoom: 1, //지도의 초기 줌 레벨
  minZoom: 7, //지도의 최소 줌 레벨
  zoomControl: true, //줌 컨트롤의 표시 여부
  zoomControlOptions: { //줌 컨트롤의 옵션
      position: naver.maps.Position.TOP_RIGHT
  }
});


var map = new GMap2(document.getElementById("map"));map.setCenter(new GLatLng(37.4419, -122.1419), 13);
