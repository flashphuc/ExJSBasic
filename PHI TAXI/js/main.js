/**
 * Người Tạo: Phúc
 *Ngày tạo 09/11/2020
 Version 1.0
 */
/**
 * 
 *  Tối ưu code đẹp cho document.getElementById() 
 */
function getEle(id) {
    return document.getElementById(id);
}

/** 
 * Mục đích: Kiểm tra xem người dùng chọn radio button nào
 * Trả về: Người dùng đang chọn radio button hiện tại
*/

function LayLoaiXe() {
    var ketqua;
    var uberX = getEle('uberX').checked;
    var uberSUV = getEle('uberSUV').checked;
    var uberBlack = getEle('uberBlack').checked;
    if (uberX) { //Ghi v tự hiểu là uberX == true 
        // Lệnh bên trong
        ketqua = "uberX";
    } else if (uberSUV) {
        ketqua = "uberSUV";
    } else if (uberBlack) {
        ketqua = "uberBlack";
    }
    return ketqua;
}

function TinhTien() {
    var laySoKM = parseFloat(getEle('soKM').value);
    var layThoiGianCho = parseFloat(getEle('thoiGianCho').value);
    var divThanhTien = getEle('divThanhTien');
    divThanhTien.style.display = "block";
    var spanTien = getEle('xuatTien');
    var loaixe = LayLoaiXe();
    var thanhTien;
    // console.log(loaixe);

    //Tính tiền tại đây
    /**
     * 0-1km            20km            nkm
        8k                         
     
     */
    switch (loaixe) {
        case 'uberX':
            if (laySoKM <= 1) {
                thanhTien = laySoKM * 8000 + layThoiGianCho * 2000;
            } else if (laySoKM > 1 && laySoKM <= 20) {
                //1 && 1 --> 1
                //1 && 0 --> 0
                // 0 && 0 --> 0
                thanhTien = 8000 + (laySoKM - 1) * 12000 + layThoiGianCho * 2000;
            } else if (laySoKM > 21) {
                thanhTien = 8000 + 20 * 12000 + (laySoKM - 21) * 10000 + layThoiGianCho * 2000;
            }
            break;
        case 'uberSUV':
            if (laySoKM <= 1) {
                thanhTien = laySoKM * 9000 + layThoiGianCho * 3000;
            } else if (laySoKM > 1 && laySoKM <= 20) {
                //1 && 1 --> 1
                //1 && 0 --> 0
                // 0 && 0 --> 0
                thanhTien = 9000 + (laySoKM - 1) * 14000 + layThoiGianCho * 3000;
            } else if (laySoKM > 21) {
                thanhTien = 9000 + 20 * 14000 + (laySoKM - 21) * 12000 + layThoiGianCho * 3000;
            }
            break;
        case 'uberBlack':
            if (laySoKM <= 1) {
                thanhTien = laySoKM * 10000 + layThoiGianCho * 4000;
            } else if (laySoKM > 1 && laySoKM <= 20) {
                //1 && 1 --> 1
                //1 && 0 --> 0
                // 0 && 0 --> 0
                thanhTien = 10000 + (laySoKM - 1) * 16000 + layThoiGianCho * 4000;
            } else if (laySoKM > 21) {
                thanhTien = 10000 + 20 * 16000 + (laySoKM - 21) * 14000 + layThoiGianCho * 4000;
            }
            break;
    }
    // var thanhTien = parseFloat(laySoKM) * 4000 + parseFloat(layThoiGianCho) * 2000;
    spanTien.innerHTML = thanhTien;

}




