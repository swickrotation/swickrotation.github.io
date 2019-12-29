window.MathJax = {
    loader: {load: ['[tex]/braket']},
    tex: {packages: {'[+]': ['braket']}},
    tex2jax: {
        inlineMath: [['$', '$'], ['$$', '$$']],
        processEscapes: true
    },
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6'
    script.async = true;
    document.head.appendChild(script);
})();
