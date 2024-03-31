/*! For license information please see 2535.dfd7b005.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["2535"],{84256:function(s,n,a){"use strict";a.r(n);var l=a("69298");let t=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,l.openBlock)(),(0,l.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useCustomFieldValue</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7528\u4E8E\u81EA\u5B9A\u4E49 Form \u7EC4\u4EF6\u4E2D\u7684\u8868\u5355\u9879\u3002</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3>\n<p>\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u5355\u9879\uFF0C\u53EF\u4EE5\u5728 Field \u7EC4\u4EF6\u7684 <code>input</code> \u63D2\u69FD\u4E2D\u63D2\u5165\u4F60\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u90E8\u8C03\u7528 <code>useCustomFieldValue</code> \u65B9\u6CD5\u3002</p>\n<h4 id="zi-ding-yi-zu-jian" tabindex="-1">\u81EA\u5B9A\u4E49\u7EC4\u4EF6</h4>\n<p>\u9996\u5148\uFF0C\u5728\u4F60\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\uFF0C\u8C03\u7528 <code>useCustomFieldValue</code> \u65B9\u6CD5\uFF0C\u5E76\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u8FD4\u56DE\u503C\u4E3A\u8868\u5355\u9879\u7684\u503C\u3002</p>\n<pre><code class="language-js"><span class="hljs-comment">// MyComponent.vue</span>\n<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useCustomFieldValue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> myValue = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n\n    <span class="hljs-comment">// \u6B64\u5904\u4F20\u5165\u7684\u503C\u4F1A\u66FF\u4EE3 Field \u7EC4\u4EF6\u5185\u90E8\u7684 value</span>\n    <span class="hljs-title function_">useCustomFieldValue</span>(<span class="hljs-function">() =&gt;</span> myValue.<span class="hljs-property">value</span>);\n\n    <span class="hljs-keyword">return</span> { myValue };\n  },\n};\n</code></pre>\n<h4 id="biao-dan" tabindex="-1">\u8868\u5355</h4>\n<p>\u63A5\u7740\uFF0C\u5728 Form \u7EC4\u4EF6\u4E2D\u5D4C\u5165\u4F60\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5F53\u63D0\u4EA4\u8868\u5355\u65F6\uFF0C\u5373\u53EF\u83B7\u53D6\u5230\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u7684\u503C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- \u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8868\u5355\u9879 --&gt;</span>\n  <span class="hljs-comment">&lt;!-- \u5F53\u8868\u5355\u63D0\u4EA4\u65F6\uFF0C\u4F1A\u5305\u62EC useCustomFieldValue \u4E2D\u4F20\u5165\u7684\u503C --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;my-field&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u8868\u5355\u9879&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">my-component</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useCustomFieldValue</span>(<span class="hljs-params">customValue: () =&gt; <span class="hljs-built_in">unknown</span></span>): <span class="hljs-built_in">void</span>;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>customValue</td>\n<td>\u83B7\u53D6\u8868\u5355\u9879\u503C\u7684\u51FD\u6570</td>\n<td><em>() =&gt; unknown</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,t))}}}]);