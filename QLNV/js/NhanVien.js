function NhanVien(maSo, tenNV, chucVu, luong, gioLam,tongLuong,xepLoai) {
    this.maSo = maSo;
    this.tenNV = tenNV;
    this.chucVu = chucVu;
    this.luong = luong;
    this.gioLam = gioLam;
    this.tongLuong = tongLuong;
    this.xepLoai = xepLoai;
    this.loaiNhanVien = function (gioLam) {
        if (gioLam > 120) {
            return "Xuất sắc";
        }
        else if (gioLam > 100) {
            return "Giỏi";
        }
        else if (gioLam > 80) {
            return "Khá";
        }
        else if (gioLam > 50) {
            return "Trung bình";
        }
        else{
            return "";
        }

    }
    this.tongLuongNV = function (selectID,luong) {
        var tongLuong = 0;
        if (getEle(selectID).selectedIndex == 1) {
            tongLuong = luong * 3;
        }
        else if (getEle(selectID).selectedIndex == 2) {
            tongLuong = luong * 2;
        }
        else if (getEle(selectID).selectedIndex == 3) {
            tongLuong = luong * 1;
        }
        return tongLuong;
    }
}