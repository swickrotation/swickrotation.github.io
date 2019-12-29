window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['$$', '$$']],
        processEscapes: true,
        
        autoload: {
            braket: ['braket']
            }
        }
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6'
    script.src = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
    script.async = true;
    document.head.appendChild(script);
})();
