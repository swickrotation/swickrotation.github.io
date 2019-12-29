window.MathJax = {
    loader: {load: ['[tex]/braket']},
    tex: {packages: {'[+]': ['braket']}}
    tex2jax: {
        inlineMath: [['$', '$'], ['$$', '$$']],
        processEscapes: true
    }
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML';
    script.async = true;
    document.head.appendChild(script);
})();
