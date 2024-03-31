/*! For license information please see 9970.a08df5a7.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9970"],{48255:function(n,a,s){"use strict";s.r(a);var t=s("69298");let l=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>FloatingPanel \u6D6E\u52A8\u9762\u677F</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u6D6E\u52A8\u5728\u9875\u9762\u5E95\u90E8\u7684\u9762\u677F\uFF0C\u53EF\u4EE5\u4E0A\u4E0B\u62D6\u52A8\u6765\u6D4F\u89C8\u5185\u5BB9\uFF0C\u5E38\u7528\u4E8E\u63D0\u4F9B\u989D\u5916\u7684\u529F\u80FD\u6216\u4FE1\u606F\u3002\u8BF7\u5347\u7EA7 <code>vant</code> \u5230 &gt;= 4.5.0 \u7248\u672C\u6765\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FloatingPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FloatingPanel</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>FloatingPanel \u7684\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A <code>100px</code>\uFF0C\u7528\u6237\u53EF\u4EE5\u62D6\u52A8\u6765\u5C55\u5F00\u9762\u677F\uFF0C\u4F7F\u9AD8\u5EA6\u8FBE\u5230 <code>60%</code> \u7684\u5C4F\u5E55\u9AD8\u5EA6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span>\n      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 26&quot;</span>\n      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>\n      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;String.fromCharCode(i + 64)&quot;</span>\n      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-mao-dian" tabindex="-1">\u81EA\u5B9A\u4E49\u951A\u70B9</h3>\n<p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>anchors</code> \u5C5E\u6027\u6765\u8BBE\u7F6E FloatingPanel \u7684\u951A\u70B9\u4F4D\u7F6E\uFF0C\u5E76\u901A\u8FC7 <code>v-model:height</code> \u6765\u63A7\u5236\u5F53\u524D\u9762\u677F\u7684\u663E\u793A\u9AD8\u5EA6\u3002</p>\n<p>\u6BD4\u5982\uFF0C\u4F7F\u9762\u677F\u7684\u9AD8\u5EA6\u5728 <code>100px</code>\u300140% \u5C4F\u5E55\u9AD8\u5EA6\u548C 70% \u5C4F\u5E55\u9AD8\u5EA6\u4E09\u4E2A\u4F4D\u7F6E\u505C\u9760\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span> <span class="hljs-attr">v-model:height</span>=<span class="hljs-string">&quot;height&quot;</span> <span class="hljs-attr">:anchors</span>=<span class="hljs-string">&quot;anchors&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center; padding: 15px&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u9762\u677F\u663E\u793A\u9AD8\u5EA6 {{ height.toFixed(0) }} px<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> anchors = [\n      <span class="hljs-number">100</span>,\n      <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-number">0.4</span> * <span class="hljs-variable language_">window</span>.<span class="hljs-property">innerHeight</span>),\n      <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-number">0.7</span> * <span class="hljs-variable language_">window</span>.<span class="hljs-property">innerHeight</span>),\n    ];\n    <span class="hljs-keyword">const</span> height = <span class="hljs-title function_">ref</span>(anchors[<span class="hljs-number">0</span>]);\n\n    <span class="hljs-keyword">return</span> { anchors, height };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jin-tou-bu-tuo-zhuai" tabindex="-1">\u4EC5\u5934\u90E8\u62D6\u62FD</h3>\n<p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CFloatingPanel \u7684\u5934\u90E8\u533A\u57DF\u548C\u5185\u5BB9\u533A\u57DF\u90FD\u53EF\u4EE5\u88AB\u62D6\u62FD\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>content-draggable</code> \u5C5E\u6027\u6765\u7981\u7528\u5185\u5BB9\u533A\u57DF\u7684\u62D6\u62FD\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span> <span class="hljs-attr">:content-draggable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center; padding: 15px&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u5185\u5BB9\u4E0D\u53EF\u62D6\u62FD<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:height</td>\n<td>\u5F53\u524D\u9762\u677F\u7684\u663E\u793A\u9AD8\u5EA6</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>anchors</td>\n<td>\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u951A\u70B9, \u5355\u4F4D <code>px</code></td>\n<td><em>number[]</em></td>\n<td><code>[100, window.innerWidth * 0.6]</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>content-draggable</td>\n<td>\u5141\u8BB8\u62D6\u62FD\u5185\u5BB9\u5BB9\u5668</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lock-scroll <code>v4.6.4</code></td>\n<td>\u5F53\u4E0D\u62D6\u62FD\u65F6\uFF0C\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-bottom</td>\n<td>\u662F\u5426\u5F00\u542F<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D</a></td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>height-change</td>\n<td>\u9762\u677F\u663E\u793A\u9AD8\u5EA6\u6539\u53D8\u4E14\u7ED3\u675F\u62D6\u52A8\u540E\u89E6\u53D1</td>\n<td><em>{ height: number }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u81EA\u5B9A\u4E49\u9762\u677F\u5185\u5BB9</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FloatingPanelProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-floating-panel-border-radius</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-header-height</td>\n<td><em>30px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-z-index</td>\n<td><em>999</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-bar-width</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-bar-height</td>\n<td><em>3px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-bar-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);