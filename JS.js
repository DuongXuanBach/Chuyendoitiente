function convert1() {
    //lay du lieu
    let amount = Number(document.getElementById("amount").value);
    let from = Number(document.getElementById("from").value);
    let to = Number(document.getElementById("to").value);
    let rate=to/from;
    let result=amount*rate;
    //hien thi du lieu
    document.getElementById("result").innerText = result;
}