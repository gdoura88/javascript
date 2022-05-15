function each(tab, f) {
    for (let i = 0; i < tab.length; i++) {
        f(tab[i]);
    }
}
each([1, 2, 3, 4], function(val) {

    console.log(val);
});