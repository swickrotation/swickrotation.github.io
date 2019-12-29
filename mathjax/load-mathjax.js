window.MathJax = {
    tex2jax: {
        inlineMath: [['$', '$'], ['$$', '$$']],
        processEscapes: true
    }
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML';
    script.src = '/mathjax/braket.js';
    script.async = true;
    document.head.appendChild(script);
})();
