document.getElementById('searchInput').addEventListener('keyup', function() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('productList');
    let li = ul.getElementsByClassName('product-item');

    for (let i = 0; i < li.length; i++) {
        let h3 = li[i].getElementsByTagName('h3')[0];
        let p = li[i].getElementsByTagName('p')[0];
        let txtValue = h3.textContent || h3.innerText;
        let txtDesc = p.textContent || p.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1 || txtDesc.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});
