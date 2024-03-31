/*! For license information please see 9950.ad4fbfcb.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9950"],{20558:function(n,s,t){"use strict";t.r(s);var a=t("69298");let e=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Signature</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Component for signature scene, based on Canvas. Please upgrade <code>vant</code> to &gt;= v4.3.0 before using this component.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Signature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Signature</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>When the confirm button is clicked, the component will emit the <code>submit</code> event. The first parameter of the event is <code>data</code>, which contains the following fields:</p>\n<ul>\n<li><code>image</code>: The image corresponding to the signature, which is in base64 string format. Returns an empty string if the signature is empty.</li>\n<li><code>canvas</code>: The Canvas element.</li>\n</ul>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;image&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> image = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params">data</span>) =&gt; {\n      image.<span class="hljs-property">value</span> = data.<span class="hljs-property">image</span>;\n    };\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClear</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;clear&#x27;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      image,\n      onSubmit,\n      onClear,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="pen-color" tabindex="-1">Pen Color</h3>\n<p>Use <code>pen-color</code> prop to set the color of the brush stroke.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">pen-color</span>=<span class="hljs-string">&quot;#ff0000&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="line-width" tabindex="-1">Line Width</h3>\n<p>Use <code>line-width</code> prop to set the width of the line.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">:line-width</span>=<span class="hljs-string">&quot;6&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="background-color" tabindex="-1">Background Color</h3>\n<p>Use <code>background-color</code> prop to set the color of the background.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">background-color</span>=<span class="hljs-string">&quot;#eee&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>Export image type</td>\n<td><em>string</em></td>\n<td><code>png</code></td>\n</tr>\n<tr>\n<td>pen-color</td>\n<td>Color of the brush stroke, default is black</td>\n<td><em>string</em></td>\n<td><code>#000</code></td>\n</tr>\n<tr>\n<td>line-width</td>\n<td>Width of the line</td>\n<td><em>number</em></td>\n<td><code>3</code></td>\n</tr>\n<tr>\n<td>background-color</td>\n<td>Background color</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>tips</td>\n<td>Text that appears when Canvas is not supported</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>clear-button-text</td>\n<td>Clear button text</td>\n<td><em>string</em></td>\n<td><code>Clear</code></td>\n</tr>\n<tr>\n<td>confirm-button-text</td>\n<td>Confirm button text</td>\n<td><em>string</em></td>\n<td><code>Confirm</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event Name</th>\n<th>Description</th>\n<th>Callback Parameters</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start</td>\n<td>Emitted when signing starts</td>\n<td>-</td>\n</tr>\n<tr>\n<td>end</td>\n<td>Emitted when signing ends</td>\n<td>-</td>\n</tr>\n<tr>\n<td>signing</td>\n<td>Emitted when signing</td>\n<td><em>event: TouchEvent</em></td>\n</tr>\n<tr>\n<td>submit</td>\n<td>Emitted when clicking the confirm button</td>\n<td><em>data: { image: string; canvas: HTMLCanvasElement }</em></td>\n</tr>\n<tr>\n<td>clear</td>\n<td>Emitted when clicking the cancel button</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Signature instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>resize <code>v4.7.3</code></td>\n<td>Resize Signature when container element resized or visibility changed</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>clear <code>v4.8.6</code></td>\n<td>Can be called to clear the signature</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>submit <code>v4.8.6</code></td>\n<td>Trigger the <code>submit</code> event, which is equivalent to clicking the confirm button.</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SignatureProps</span>, <span class="hljs-title class_">SignatureInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>SignatureInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SignatureInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> signatureRef = ref&lt;<span class="hljs-title class_">SignatureInstance</span>&gt;();\n\nsignatureRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">resize</span>();\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-signature-padding</td>\n<td><em>var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-signature-content-height</td>\n<td><em>200px</em></td>\n<td>Height of the canvas</td>\n</tr>\n<tr>\n<td>--van-signature-content-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>Background color of the canvas</td>\n</tr>\n<tr>\n<td>--van-signature-content-border</td>\n<td><em>1px dotted #dadada</em></td>\n<td>Border style of the canvas</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);