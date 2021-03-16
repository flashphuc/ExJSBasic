function ValidationCheck() {
    //kiểm tra rỗng
    this.kiemTraRong = function (value, spanID, message) {
        if (value == "") {
            //nếu giá trị bị trống
            getELE(spanID).innerHTML = message;
            getELE(spanID).style.display = "block";
            return false;
        }
        //giá trị k bị trống
        getELE(spanID).innerHTML = "";
        getELE(spanID).style.display = "none";
        return true;
    }
    this.kiemTraSo = function (value, spanID, message) {
        //biểu thức của Regular expression
        var pattern = new RegExp(
            "[0-9]$"
        );
        if (pattern.test(value)) {
            getELE(spanID).innerHTML = "";
            getELE(spanID).style.display = "none";
            return true;
        }
        
        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";
        return false;
    }
    this.kiemTraLoaiXe = function (spanID, message) {
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
        console.log("as", ketQua);
        if (ketQua === "uberX" || ketQua === "uberSUV" || ketQua === "uberBlack") {
            console.log("1");
            getELE(spanID).innerHTML = "";
            getELE(spanID).style.display = "none";
            return true;
        }
        console.log("2");
        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";
        return false;
    }
}