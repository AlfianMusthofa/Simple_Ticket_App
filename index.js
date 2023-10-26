$(document).ready(function () {
    let hargaTiket = 0;
    let jumlahTiket = 0;
    let memberDiskon = 0.1;

    $('.tujuan-field .dropdown-item').click(function () {
        var text = $(this).text();
        hargaTiket = getHargaByTujuan(text);
        $('#dropdownMenuButton1').text(text);
        updateTotal();
    })

    $('.jumlah .dropdown-item').click(function () {
        var text = $(this).text();
        jumlahTiket = parseInt(text);
        $('#dropdownMenuButton2').text(text);
        updateTotal();
    })

    $('.member').change(function () {
        updateTotal();
    })

    function getHargaByTujuan(tujuan) {
        switch (tujuan) {
            case "Bandung":
                return "100000";
            case "Jakarta":
                return "50000";
            case "Surabaya":
                return "200000";
            case "Tangerang":
                return "20000";
            case "Denpasar":
                return "300000";
            default:
                return 0;
        }
    }

    function formatangka(angka) {
        return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function updateTotal() {
        let diskon = $(".member input").is(":checked") ? memberDiskon : 0;
        let totalBayar = hargaTiket * jumlahTiket * (1 - diskon);
        let formattedTotal = formatangka(totalBayar.toFixed(0));
        $(".price-field input").val(formatangka(hargaTiket));
        $(".disc input").val(diskon * 100 + "%");
        $(".total input").val(formattedTotal);
    }
})