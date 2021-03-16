function getELE(id) {
    return document.getElementById(id);
}
var validation = new ValidationCheck();
function KiemTra() {
    var soKM = getELE("soKM").value;
    var thoiGianCho = getELE("thoiGianCho").value;
    var isValid = true;

    isValid &= validation.kiemTraRong(soKM, "tbsoKm", "Số KM không được để trống") &&  validation.kiemTraSo(parseFloat(soKM), "tbsoKm", "Vui lòng nhập số");

    isValid &= validation.kiemTraRong(thoiGianCho, "tbThoiGianCho", "Thời gian chờ không được để trống") && validation.kiemTraSo(parseFloat(thoiGianCho), "tbThoiGianCho", "Vui lòng nhập số");

    isValid &= validation.kiemTraLoaiXe("tbLoaiXe", "Vui lòng chọn loại xe");

    return isValid;

}
function LayLoaiXe() {
    var ketQua;
    var uberX = getELE("uberX").checked;
    var uberSUV = getELE("uberSUV").checked;
    var uberBlack = getELE("uberBlack").checked;

    if (uberX) {
        ketQua = "uberX";
    } else if (uberSUV) {
        ketQua = "uberSUV";
    } else if (uberBlack) {
        ketQua = "uberBlack";
    }
    return ketQua;
}

function TinhTien() {
    var checkVali = KiemTra();
    if (checkVali == true) {
        var laySoKM = parseFloat(getELE("soKM").value);
        var layThoiGianCho = parseFloat(getELE("thoiGianCho").value);
        var divThanhTien = getELE("divThanhTien");
        divThanhTien.style.display = "block";
        var spanTien = getELE("xuatTien");

        var loaixe = LayLoaiXe();
        // console.log(loaixe);
        //tính tiền
        var thanhTien = 0;
        switch (loaixe) {
            case 'uberX':
                if (laySoKM > 0 && laySoKM <= 1) {
                    thanhTien = laySoKM * 8000 + layThoiGianCho * 2000;
                } else if (laySoKM > 1 && laySoKM <= 20) {
                    thanhTien = 1 * 8000 + (laySoKM - 1) * 12000 + layThoiGianCho * 2000;
                } else if (laySoKM > 20) {
                    thanhTien = 1 * 8000 + 19 * 12000 + (laySoKM - 20) * 10000 + layThoiGianCho * 2000;
                }
                break;
            case 'uberSUV':
                if (laySoKM > 0 && laySoKM <= 1) {
                    thanhTien = laySoKM * 9000 + layThoiGianCho * 3000;
                } else if (laySoKM > 1 && laySoKM <= 20) {
                    thanhTien = 1 * 9000 + (laySoKM - 1) * 14000 + layThoiGianCho * 3000;
                } else if (laySoKM > 20) {
                    thanhTien = 1 * 9000 + 19 * 14000 + (laySoKM - 20) * 12000 + layThoiGianCho * 3000;
                }
                break;
            case 'uberBlack':
                if (laySoKM > 0 && laySoKM <= 1) {
                    thanhTien = laySoKM * 10000 + layThoiGianCho * 4000;
                } else if (laySoKM > 1 && laySoKM <= 20) {
                    thanhTien = 1 * 10000 + (laySoKM - 1) * 16000 + layThoiGianCho * 4000;
                } else if (laySoKM > 20) {
                    thanhTien = 1 * 10000 + 19 * 16000 + (laySoKM - 20) * 14000 + layThoiGianCho * 4000;
                }
                break;
        }
        spanTien.innerHTML = thanhTien;
    }
}

function InHoaDon() {
    var checkVali = KiemTra();
    if (checkVali == true) {
        var loaixe = LayLoaiXe();
        var laySoKM = parseFloat(getELE("soKM").value);
        var layThoiGianCho = parseFloat(getELE("thoiGianCho").value);
        var thanhTien = 0;
        var spanTien = getELE("tongtien");
        var tbody = getELE("thanhtoan");
        switch (loaixe) {
            case 'uberX':
                if (laySoKM > 0 && laySoKM <= 1) {
                    var tien1 = laySoKM * 8000;
                    var content = "";
                    content += `
                        <tr>
                            <td>${loaixe}</td>
                            <td>${laySoKM} km</td>
                            <td>${8000}</td>
                            <td>${tien1}</td>
                        </tr>
                    `;
                    tbody.innerHTML = content;
                    thanhTien = laySoKM * 8000 + layThoiGianCho * 2000;

                } else if (laySoKM > 1 && laySoKM <= 20) {
                    var tien1 = 8000;
                    var tien2 = (laySoKM - 1) * 12000;
                    var content = "";
                    content += `
                        <tr>
                            <td>${loaixe}</td>
                            <td>${1} km</td>
                            <td>${8000}</td>
                            <td>${tien1}</td>
                        </tr>
                        <tr>
                            <td>${loaixe}</td>
                            <td>${laySoKM - 1} km</td>
                            <td>${12000}</td>
                            <td>${tien2}</td>
                        </tr>
                    `;
                    tbody.innerHTML = content;
                    thanhTien = 1 * 8000 + (laySoKM - 1) * 12000 + layThoiGianCho * 2000;

                } else if (laySoKM > 20) {
                    var tien1 = 8000;
                    var tien2 = 19 * 12000;
                    var tien3 = (laySoKM - 20) * 10000;
                    var content = "";
                    content += `
                    <tr>
                        <td>${loaixe}</td>
                        <td>${1} km</td>
                        <td>${8000}</td>
                        <td>${tien1}</td>
                    </tr>
                    <tr>
                        <td>${loaixe}</td>
                        <td>${19} km</td>
                        <td>${12000}</td>
                        <td>${tien2}</td>
                    </tr>
                    <tr>
                        <td>${loaixe}</td>
                        <td>${laySoKM - 20} km</td>
                        <td>${10000}</td>
                        <td>${tien3}</td>
                    </tr>
                `;
                    tbody.innerHTML = content;
                    thanhTien = 1 * 8000 + 19 * 12000 + (laySoKM - 20) * 10000 + layThoiGianCho * 2000;
                }
                break;
            case 'uberSUV':
                if (laySoKM > 0 && laySoKM <= 1) {
                    var tien1 = laySoKM * 9000;
                    var content = "";
                    content += `
                        <tr>
                            <td>${loaixe}</td>
                            <td>${laySoKM} km</td>
                            <td>${9000}</td>
                            <td>${tien1}</td>
                        </tr>
                    `;
                    tbody.innerHTML = content;
                    thanhTien = laySoKM * 9000 + layThoiGianCho * 3000;
                } else if (laySoKM > 1 && laySoKM <= 20) {
                    var tien1 = 9000;
                    var tien2 = (laySoKM - 1) * 14000;
                    var content = "";
                    content += `
                        <tr>
                            <td>${loaixe}</td>
                            <td>${1} km</td>
                            <td>${9000}</td>
                            <td>${tien1}</td>
                        </tr>
                        <tr>
                            <td>${loaixe}</td>
                            <td>${laySoKM - 1} km</td>
                            <td>${14000}</td>
                            <td>${tien2}</td>
                        </tr>
                    `;
                    tbody.innerHTML = content;
                    thanhTien = 1 * 9000 + (laySoKM - 1) * 14000 + layThoiGianCho * 3000;
                } else if (laySoKM > 20) {
                    var tien1 = 9000;
                    var tien2 = 19 * 14000;
                    var tien3 = (laySoKM - 20) * 12000;
                    var content = "";
                    content += `
                    <tr>
                        <td>${loaixe}</td>
                        <td>${1} km</td>
                        <td>${9000}</td>
                        <td>${tien1}</td>
                    </tr>
                    <tr>
                        <td>${loaixe}</td>
                        <td>${19} km</td>
                        <td>${14000}</td>
                        <td>${tien2}</td>
                    </tr>
                    <tr>
                        <td>${loaixe}</td>
                        <td>${laySoKM - 20} km</td>
                        <td>${12000}</td>
                        <td>${tien3}</td>
                    </tr>
                `;
                    tbody.innerHTML = content;
                    thanhTien = 1 * 9000 + 19 * 14000 + (laySoKM - 20) * 12000 + layThoiGianCho * 3000;
                }
                break;
            case 'uberBlack':
                if (laySoKM > 0 && laySoKM <= 1) {
                    var tien1 = laySoKM * 10000;
                    var content = "";
                    content += `
                        <tr>
                            <td>${loaixe}</td>
                            <td>${laySoKM} km</td>
                            <td>${10000}</td>
                            <td>${tien1}</td>
                        </tr>
                    `;
                    tbody.innerHTML = content;
                    thanhTien = laySoKM * 10000 + layThoiGianCho * 4000;
                } else if (laySoKM > 1 && laySoKM <= 20) {
                    var tien1 = 10000;
                    var tien2 = (laySoKM - 1) * 16000;
                    var content = "";
                    content += `
                    <tr>
                        <td>${loaixe}</td>
                        <td>${1} km</td>
                        <td>${10000}</td>
                        <td>${tien1}</td>
                    </tr>
                    <tr>
                        <td>${loaixe}</td>
                        <td>${laySoKM - 1} km</td>
                        <td>${16000}</td>
                        <td>${tien2}</td>
                    </tr>
                `;
                    tbody.innerHTML = content;
                    thanhTien = 1 * 10000 + (laySoKM - 1) * 16000 + layThoiGianCho * 4000;
                } else if (laySoKM > 20) {
                    var tien1 = 10000;
                    var tien2 = 19 * 16000;
                    var tien3 = (laySoKM - 20) * 14000;
                    var content = "";
                    content += `
                    <tr>
                        <td>${loaixe}</td>
                        <td>${1} km</td>
                        <td>${10000}</td>
                        <td>${tien1}</td>
                    </tr>
                    <tr>
                        <td>${loaixe}</td>
                        <td>${19} km</td>
                        <td>${16000}</td>
                        <td>${tien2}</td>
                    </tr>
                    <tr>
                        <td>${loaixe}</td>
                        <td>${laySoKM - 20} km</td>
                        <td>${14000}</td>
                        <td>${tien3}</td>
                    </tr>
                `;
                    tbody.innerHTML = content;
                    thanhTien = 1 * 10000 + 19 * 16000 + (laySoKM - 20) * 14000 + layThoiGianCho * 4000;
                }
                break;
        }
        spanTien.innerHTML = thanhTien;
    }
}