/*braket.js
 *  
 * Implements the Braket Package for LaTeX input.
 *  
 * ---------------------------------------------------------------------
 *  
 * Copyright(c) 2018 William Gertler.
 * 
 * Licensed under the Apache License, Version 2.0(the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
    * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
    * limitations under the License.
 *
 */

MathJax.Extension["TeX/boldsymbol"] = { version: "2.7.3" };

MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
    MathJax.InputJax.TeX.Definitions.Add({
        macros: {

            bra: ["Macro", "{\\langle {#1} \\vert}", 1],
            ket: ["Macro", "{\\vert {#1} \\rangle}", 1],
            braket: ["Macro", "{\\langle {#1} \\rangle}", 1],
            set: ["Macro", "{\\{ {#1} \\}}", 1],
            Set: ["Macro", "{\\left\\{ {#1} \\right\\}}", 1],
            Bra: ["Macro", "{\\left\\langle { #1} \\right\\vert}", 1],
            Ket: ["Macro", "{\\left\\vert { #1 } \\right\\rangle}", 1],
            Braket: ["Macro", "{\\left\\langle {#1} \\right\\rangle}", 1]

        }
    });
});

MathJax.Hub.Startup.signal.Post("TeX braket Ready");
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/braket.js");