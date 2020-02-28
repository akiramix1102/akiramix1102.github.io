var stateObject = {
    "Hà Nội": {
        " Huyện Ba Vì": ["Thị Trấn Tây Đằng", "Phú Cường", "Cổ Đô", "Vạn Hồng", "Tây Thắng"],
        " Quận Ba Đình": ["Phường Phúc Xá", "Phường Trúc Bạch", "Phường Vĩnh Phúc", "Phường Cống Vị",
            "Phường Thành Công", "Phường Kim Mã", "Phường Giảng Võ"
        ],
        "Quận Hoàng Mai": ["Phường Thanh Trì", "Phường Vĩnh Hưng","Phường Định Công","Phường Mai Động","Phường Tương Mai","Phường Đại Kim"],
    },
    "Đà Nẵng": {
        "Quận Cẩm Lệ": ["Phường Khuê Trung", "Phường Hòa Phát","Phường Hòa An","Phường Hòa Xuân"],
        "Quận Ngũ Hành Sơn": ["Phường Khuê An", "Phường Khuê Mỹ",'Phường Hòa Quý','Phường Hòa Hải']
    },
    "Tp. Hồ Chí Minh": {
        "Quận 1": ["Phường Tân Định", "Phường Đa Kao","Phường Bến Nghé","Phường Bến Thành"],
        "Quận 8": ["Phường 01", "Phường 02", "Phường 03", "Phường 04", "Phường 05", "Phường 06"]
    },
}
window.onload = function () {
    var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel"),
        districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
        stateSel.length = 1; // remove all options bar first
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}