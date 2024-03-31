/*! For license information please see 9728.c9b084b5.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9728"],{39297:function(s,n,a){"use strict";a.r(n);var t=a("69298");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>BackTop</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>A button to back to top.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BackTop</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">BackTop</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>Please scroll the demo page to display the back top button.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-position" tabindex="-1">Custom Position</h3>\n<p>Using <code>right</code> and <code>bottom</code> props to set the position of BackTop component.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;15vw&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;10vh&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3>\n<p>Using the default slot to custom content.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom&quot;</span>&gt;</span>Back Top<span class="hljs-tag">&lt;/<span class="hljs-name">van-back-top</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.custom</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;\n    <span class="hljs-attribute">text-align</span>: center;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="set-scroll-target" tabindex="-1">Set Scroll Target</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;.container&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;30vh&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.container</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">60vh</span>;\n    <span class="hljs-attribute">overflow</span>: auto;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="immediate-scroll" tabindex="-1">Immediate Scroll</h3>\n<p>Add <code>immediate</code> prop to scroll to top immediately.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">immediate</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>target</td>\n<td>Can be a selector or a DOM ELement, default closest parent scrolling container</td>\n<td><em>string | HTMLElement</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>right</td>\n<td>Right distance of the page, the default unit is px</td>\n<td><em>number | string</em></td>\n<td><code>30</code></td>\n</tr>\n<tr>\n<td>bottom</td>\n<td>Bottom distance of the page, the default unit is px</td>\n<td><em>number | string</em></td>\n<td><code>40</code></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>The component will not display until the scroll offset reaches this value</td>\n<td><em>number</em></td>\n<td><code>200</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where BackTop will be mounted</td>\n<td><em>string | Element</em></td>\n<td><code>body</code></td>\n</tr>\n<tr>\n<td>immediate <code>v4.0.9</code></td>\n<td>Whether to scroll to top immediately</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>Set the z-index to a fixed value</td>\n<td><em>number | string</em></td>\n<td><code>100</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when Component is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>customize default content</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BackTopProps</span>, <span class="hljs-title class_">BackTopThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-back-top-size</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-icon-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-right</td>\n<td><em>30px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-bottom</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-z-index</td>\n<td><em>100</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-text-color</td>\n<td><em>#fff</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-back-top-background</td>\n<td><em>var(--van-blue)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);