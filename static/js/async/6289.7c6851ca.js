/*! For license information please see 6289.7c6851ca.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["6289"],{53301:function(s,n,a){"use strict";a.r(n);var t=a("69298");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useRelation</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Establish the association relationship between parent and child components, perform data communication and method invocation, based on <code>provide</code> and <code>inject</code> implementation.</p>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>Use <code>useChildren</code> in parent to associate child components:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useChildren } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">RELATION_KEY</span> = <span class="hljs-title class_">Symbol</span>(<span class="hljs-string">&#x27;my-relation&#x27;</span>);\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { linkChildren } = <span class="hljs-title function_">useChildren</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);\n\n    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params"></span>) =&gt; {\n      count.<span class="hljs-property">value</span>++;\n    };\n\n    <span class="hljs-comment">// provide data and methods to children</span>\n    <span class="hljs-title function_">linkChildren</span>({ add, count });\n  },\n};\n</code></pre>\n<p>Use <code>useParent</code> in child component to get the data and methods provided by parent.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useParent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { parent } = <span class="hljs-title function_">useParent</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);\n\n    <span class="hljs-comment">// use data and methods provided by parent</span>\n    <span class="hljs-keyword">if</span> (parent) {\n      parent.<span class="hljs-title function_">add</span>();\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(parent.<span class="hljs-property">count</span>.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; 1</span>\n    }\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> useParent&lt;T&gt;(<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span>): {\n  parent?: T;\n  index?: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;\n};\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">useChildren</span>(<span class="hljs-params">key: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span></span>): {\n  <span class="hljs-attr">children</span>: <span class="hljs-title class_">ComponentPublicInstance</span>[];\n  <span class="hljs-attr">linkChildren</span>: <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">any</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="return-value-of-useparent" tabindex="-1">Return Value of useParent</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>parent</td>\n<td>Data and methods provided by parent</td>\n<td><em>any</em></td>\n</tr>\n<tr>\n<td>index</td>\n<td>Index position of the current component in all child of the parent component</td>\n<td><em>Ref&lt;number&gt;</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="return-value-of-usechildren" tabindex="-1">Return Value of useChildren</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>children</td>\n<td>Component list of children</td>\n<td><em>ComponentPublicInstance[]</em></td>\n</tr>\n<tr>\n<td>linkChildren</td>\n<td>Function to provide values to child</td>\n<td><em>(value: any) =&gt; void</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);