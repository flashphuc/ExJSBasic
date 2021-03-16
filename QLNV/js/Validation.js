function Validation() {
    this.kiemTraRong = function (value, spanID, message) {
        if (value == "") {
            getEle(spanID).innerHTML = message;
            getEle(spanID).style.display = "block";
            return false;
        }
        else {
            getEle(spanID).innerHTML = "";
            getEle(spanID).style.display = "none";
            return true;
        }

    }
    this.kiemTraMaTrung = function (value, mangNV, spanID, message) {
        var isExist = false;
        mangNV.map(function (item, index) {
            if (item.maSo === value) {
                isExist = true;
            }
        });
        if (isExist == true) {
            getEle(spanID).innerHTML = message;
            getEle(spanID).style.display = "block";
            return false;
        }
        if (isExist == false) {
            getEle(spanID).innerHTML = "";
            getEle(spanID).style.display = "none";
            return true;
        }
    }
    this.kiemTraTen = function (value, spanID, message) {
        var pattern = new RegExp(
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        );
        if (pattern.test(value)) {
            getEle(spanID).innerHTML = "";
            getEle(spanID).style.display = "none";
            return true;
        } else {
            //không hợp lệ
            getEle(spanID).innerHTML = message;
            getEle(spanID).style.display = "block";
            return false;
        }

    }
    // this.kiemTraSo = function(value,spanID,message){
    //     var pattern = new RegExp(
    //         "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    //         "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
    //         "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    //     );
    //     if(pattern.test(value)){
    //         getEle(spanID).innerHTML = message;
    //         getEle(spanID).style.display = "block";
    //         return false;

    //     } else {

    //         getEle(spanID).innerHTML = "";
    //         getEle(spanID).style.display = "none";
    //         return true;
    //     }

    // }
    this.kiemTraChucVu = function (selectID, spanID, message) {
        if (getEle(selectID).selectedIndex != 0) {
            getEle(spanID).innerHTML = "";
            getEle(spanID).style.display = "none";
            return true;
        }
        else {
            //không hợp lệ
            getEle(spanID).innerHTML = message;
            getEle(spanID).style.display = "block";
            return false;
        }

    }
}