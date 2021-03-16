function DanhSachNhanVien() {
    this.mangNV = [];

    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }
    this.timViTri = function (ma) {
        var viTri = -1;
        this.mangNV.map(function (item, index) {
            if (item.maSo == ma) {
                viTri = index;
            }
        });
        return viTri;
    }
    this.xoaNV = function (ma) {
        var viTri = this.timViTri(ma);
        if (viTri > -1) {
            this.mangNV.splice(viTri, 1);
        }
    }
    this.layThongTinChiTietNV = function (ma) {
        var viTri = this.timViTri(ma);
        var nhanVien;
        if (viTri > -1) {
            nhanVien = this.mangNV[viTri];
        }
        return nhanVien;
    }
    this.capNhatNV = function (nv) {
        var viTri = this.timViTri(nv.maSo);
        if (viTri > -1) {
            this.mangNV[viTri] = nv;
        }
    }
    this.timViTriTheoChucVu = function (chucVuNV) {
        var viTri = -1;
        this.mangNV.map(function (item, index) {
            if (item.chucVu == chucVuNV) {
                viTri = index;
            }
        });
        return viTri;
    }
    this.timNVTheoChucVu = function(chucVu){
        var mangCV = [];
        viTri = this.timNVTheoChucVu(chucVu);
        var nv;
        if(viTri > -1){
            nv = this.mangNV[viTri];
            mangCV.push(nv);
        }
        return mangCV;

    }

}

//prototype

DanhSachNhanVien.prototype.timKiemNhanVien = function (keyword) {
    var mangKQ = [];

    keyword = keyword.toLowerCase();

    
    this.mangNV.map(function (item, index) {
       var tenChuThuong = item.tenNV.toLowerCase();
    //    var tenChuThuong = item.tenNV.toLowerCase();
        if (tenChuThuong.indexOf(keyword) > -1){
            mangKQ.push(item);
        }
    });
    return mangKQ;

}