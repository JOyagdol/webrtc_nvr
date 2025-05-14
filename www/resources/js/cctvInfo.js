var url = "stream.html?"
var cctvList;
var modeList;
const u = new URL('http://10.3.128.40:80/cctvInfo')
        fetch(u)
        .then(res => res.json())
        .then(data => {
            cctvList = data['cctvList']
            modeList = data['modeList']
            // for(var cctv of data['cctvList']) {
            //     url = url + "src=" + cctv + "&"
            // }
            // var mode = data['modeList'].join(',')
            // url = url + "mode=" + mode
            // document.getElementById('streamUrl').href = url
        });

