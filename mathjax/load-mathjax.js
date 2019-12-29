window.MathJax = {
    tex2jax: {
        inlineMath: [['$', '$'], ['$$', '$$']],
        processEscapes: true
    }
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
    script.async = true;
    document.head.appendChild(script);
})();
