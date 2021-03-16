var dsnv = new DanhSachNhanVien();
var validation = new Validation();
getLocalStorage();
function getEle(id) {
    return document.getElementById(id);
}
function layThongTin() {
    var maSo = getEle("msnv").value;
    var tenNV = getEle("name").value;
    var chucVu = getEle("chucvu").value;
    var luongCB = parseFloat(getEle("luong").value);
    var luong = getEle("luong").value;
    var gioLam = parseFloat(getEle("gioLam").value);
    var gioLamNV = getEle("gioLam").value;
    console.log(maSo, tenNV, chucVu, luongCB, gioLam);

    var isValid = true;

    isValid &= validation.kiemTraRong(maSo,"tbMaNV", "Mã nhân viên không được để trống") && validation.kiemTraMaTrung(maSo, dsnv.mangNV, "tbMaNV", "Mã nhân viên không được trùng");
    isValid &= validation.kiemTraRong(tenNV,"tbTen","Tên nhân viên không được để trống") && validation.kiemTraTen(tenNV,"tbTen","Tên nhân viên không hợp lệ");

    isValid &= validation.kiemTraChucVu("chucvu","tbChucVu","Chức vụ không được để trống");
    isValid &= validation.kiemTraRong(luong,"tbLuong","Lương nhân viên không được để trống");
    isValid &= validation.kiemTraRong(gioLamNV,"tbgioLam","Lương nhân viên không được để trống");

    if (isValid == true) {
      
        var nv = new NhanVien();
        var tongLuong = nv.tongLuongNV("chucvu", luongCB);
        var xepLoai = nv.loaiNhanVien(gioLam);
        nv = new NhanVien(maSo, tenNV, chucVu, luongCB, gioLam, tongLuong, xepLoai);
        //    console.log(tongLuong);
        console.log(nv);

        dsnv.themNV(nv);
        console.log(dsnv.mangNV);
        setLocalStorage(dsnv.mangNV);
    }

}
getEle("btnthemNV").addEventListener('click', function () {
    layThongTin();
    hienThiDanhSach(dsnv.mangNV);
    // getEle("formNV").reset();

})
function setLocalStorage(mangNV) {
    localStorage.setItem("DSNV", JSON.stringify(mangNV));
}
function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        var ds = JSON.parse(localStorage.getItem("DSNV"));
        dsnv.mangNV = ds;
        console.log(ds);
        hienThiDanhSach(dsnv.mangNV);
    }
}

function hienThiDanhSach(mangNV) {
    var tbody = getEle("tableDanhSach");
    var content = "";
    for (var i = 0; i < mangNV.length; i++) {
        var nv = mangNV[i];
        content += `
        <tr>
        <td>${nv.maSo}</td>
        <td>${nv.tenNV}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.luong}</td>
        <td>${nv.gioLam}</td>
        <td>${nv.xepLoai}</td>
        <td>${nv.tongLuong}</td>
        <td>
        <button class="btn btn-info" onclick="suaNhanVien('${nv.maSo}')"><i class="fa fa-file-signature"></i></button>
        <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maSo}')"><i class="fa fa-trash-alt"></i></button>
        </td>
        </tr>
        `;
    }
    tbody.innerHTML = content;

}
function xoaNhanVien(ma) {
    dsnv.xoaNV(ma);
    hienThiDanhSach(dsnv.mangNV);
    setLocalStorage(dsnv.mangNV);
}
function suaNhanVien(ma) {
    var nv = dsnv.layThongTinChiTietNV(ma);

    getEle("msnv").setAttribute('disabled', true);

    getEle("btnthemNV").style.display = "none";
    getEle("btnCapNhat").style.display = "block";

    getEle("msnv").value = nv.maSo;
    getEle("name").value = nv.tenNV;
    getEle("chucvu").value = nv.chucVu;
    getEle("luong").value = nv.luong;
    getEle("gioLam").value = nv.gioLam;

}
getEle("btnCapNhat").addEventListener('click', function () {
    var maSo = getEle("msnv").value;
    var tenNV = getEle("name").value;
    var chucVu = getEle("chucvu").value;
    var luongCB = parseFloat(getEle("luong").value);
    var gioLam = parseFloat(getEle("gioLam").value);

    console.log(maSo, tenNV, chucVu, luongCB, gioLam);
    var nv = new NhanVien();
    var tongLuong = nv.tongLuongNV("chucvu", luongCB);
    var xepLoai = nv.loaiNhanVien(gioLam);
    nv = new NhanVien(maSo, tenNV, chucVu, luongCB, gioLam, tongLuong, xepLoai);

    dsnv.capNhatNV(nv);
    hienThiDanhSach(dsnv.mangNV);
    setLocalStorage(dsnv.mangNV);

    getEle("msnv").removeAttribute("disabled");
    getEle("formNV").reset();
    getEle("btnthemNV").style.display = "block";
    getEle("btnCapNhat").style.display = "none";


});

getEle("btnTimNV").addEventListener('click', function () {
    var keyword = getEle("timNV").value.trim();
    var mangKQ = dsnv.timKiemNhanVien(keyword);
    hienThiDanhSach(mangKQ);
});
getEle("timNV").addEventListener('keyup', function () {
    var keyword = getEle("timNV").value.trim();
    var mangKQ = dsnv.timKiemNhanVien(keyword);
    hienThiDanhSach(mangKQ);
});
getEle("chucvu").addEventListener('onkeyup',function(){
    var chucVu = getEle("chucvu").value;
    var mangCV = dsnv.timNVTheoChucVu(chucVu);
    hienThiDanhSach(mangCV);
})