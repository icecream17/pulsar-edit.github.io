import{_ as r,a as c,b as d,c as h}from"./unity-theme.cd84ba18.js";import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as u,a as t,b as e,e as a,w as s,d as o,r as l}from"./app.066b0f7d.js";const g={},f=t("h3",{id:"atom-packages",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#atom-packages","aria-hidden":"true"},"#"),e(" Atom Packages")],-1),k={href:"https://github.com/atom/tree-view",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/atom/settings-view",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/atom/welcome",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/atom/spell-check",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/atom/one-dark-ui",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/atom/fuzzy-finder",target:"_blank",rel:"noopener noreferrer"},x=o('<p>This means that packages can be incredibly powerful and can change everything from the very look and feel of the entire interface to the basic operation of even core functionality.</p><p>In order to install a new package, you can use the Install tab in the now familiar Settings View. Open up the Settings View using <kbd class="platform-mac">Cmd+,</kbd><kbd class="platform-windows platform-linux">Ctrl+,</kbd>, click on the &quot;Install&quot; tab and type your search query into the box under Install Packages.</p><p>The packages listed here have been published to https://atom.io/packages which is the official registry for Atom packages. Searching on the Settings View will go to the Atom package registry and pull in anything that matches your search terms.</p><p><img src="'+r+'" alt="Package install screen" title="Package install screen"></p><p>All of the packages will come up with an &quot;Install&quot; button. Clicking that will download the package and install it. Your editor will now have the functionality that the package provides.</p><h4 id="package-settings" tabindex="-1"><a class="header-anchor" href="#package-settings" aria-hidden="true">#</a> Package Settings</h4><p>Once a package is installed in Atom, it will show up in the Settings View under the &quot;Packages&quot; tab, along with all the preinstalled packages that come with Atom. To filter the list in order to find one, you can type into search box directly under the &quot;Installed Packages&quot; heading.</p><p><img src="'+c+'" alt="Package settings screen" title="Package settings screen"></p><p>Clicking on the &quot;Settings&quot; button for a package will give you the settings screen for that package specifically. Here you have the option of changing some of the default variables for the package, seeing what all the command keybindings are, disabling the package temporarily, looking at the source code, seeing the current version of the package, reporting issues and uninstalling the package.</p><p>If a new version of any of your packages is released, Atom will automatically detect it and you can upgrade the package from either this screen or from the &quot;Updates&quot; tab. This helps you easily keep all your installed packages up to date.</p><h4 id="atom-themes" tabindex="-1"><a class="header-anchor" href="#atom-themes" aria-hidden="true">#</a> Atom Themes</h4><p>You can also find and install new themes for Atom from the Settings View. These can be either UI themes or syntax themes and you can search for them from the &quot;Install&quot; tab, just like searching for new packages. Make sure to press the &quot;Themes&quot; toggle next to the search box.</p><p><img src="'+d+'" alt="Theme search screen" title="Theme search screen"></p><p>Clicking on the theme title will take you to a profile page for the theme on atom.io, which often has a screenshot of the theme. This way you can see what it looks like before installing it.</p>',14),A=o('<p><img src="'+h+`" alt="Example of the Unity UI theme with Monokai syntax theme" title="Example of the Unity UI theme with Monokai syntax theme"></p><h4 id="command-line" tabindex="-1"><a class="header-anchor" href="#command-line" aria-hidden="true">#</a> Command Line</h4><p>You can also install packages or themes from the command line using <code>apm</code>.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Check that you have <code>apm</code> installed by running the following command in your terminal:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm help install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You should see a message print out with details about the <code>apm install</code> command.</p><p>If you do not, see the <a href="/getting-started/sections/installing-atom">Installing Atom section</a> for instructions on how to install the <code>atom</code> and <code>apm</code> commands for your system.</p></div><p>You can also install packages by using the <code>apm install</code> command:</p><ul><li><code>apm install &lt;package_name&gt;</code> to install the latest version.</li><li><code>apm install &lt;package_name&gt;@&lt;package_version&gt;</code> to install a specific version.</li></ul>`,6),C=t("code",null,"apm install emmet@0.1.5",-1),S=t("code",null,"0.1.5",-1),I={href:"https://github.com/atom/emmet",target:"_blank",rel:"noopener noreferrer"},q=o(`<p>You can also use <code>apm</code> to find new packages to install. If you run <code>apm search</code>, you can search the package registry for a search term.</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm search coffee
&gt; Search Results For &#39;coffee&#39; (29)
&gt; \u251C\u2500\u2500 build-coffee Atom Build provider for coffee, compiles CoffeeScript (1160 downloads, 2 stars)
&gt; \u251C\u2500\u2500 scallahan-coffee-syntax A coffee inspired theme from the guys over at S.CALLAHAN (183 downloads, 0 stars)
&gt; \u251C\u2500\u2500 coffee-paste Copy/Paste As : Js \u27A4 Coffee / Coffee \u27A4 Js (902 downloads, 4 stars)
&gt; \u251C\u2500\u2500 atom-coffee-repl Coffee REPL for Atom Editor (894 downloads, 2 stars)
&gt; \u251C\u2500\u2500 coffee-navigator Code navigation panel for Coffee Script (3493 downloads, 22 stars)
&gt; ...
&gt; \u251C\u2500\u2500 language-iced-coffeescript Iced coffeescript for atom (202 downloads, 1 star)
&gt; \u2514\u2500\u2500 slontech-syntax Dark theme for web developers ( HTML, CSS/LESS, PHP, MYSQL, javascript, AJAX, coffee, JSON ) (2018 downloads, 3 stars)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use <code>apm view</code> to see more information about a specific package.</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm view build-coffee
&gt; build-coffee
&gt; \u251C\u2500\u2500 0.6.4
&gt; \u251C\u2500\u2500 https://github.com/idleberg/atom-build-coffee
&gt; \u251C\u2500\u2500 Atom Build provider for coffee, compiles CoffeeScript
&gt; \u251C\u2500\u2500 1152 downloads
&gt; \u2514\u2500\u2500 2 stars
&gt;
&gt; Run \`apm install build-coffee\` to install this package.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function T(P,L){const n=l("ExternalLinkIcon"),i=l("RouterLink");return p(),u("div",null,[f,t("p",null,[e("First we'll start with the Atom package system. As we mentioned previously, Atom itself is a very basic core of functionality that ships with a number of useful packages that add new features like the "),t("a",k,[e("Tree View"),a(n)]),e(" and the "),t("a",b,[e("Settings View"),a(n)]),e(".")]),t("p",null,[e("In fact, there are more than 80 packages that comprise all of the functionality that is available in Atom by default. For example, the "),t("a",v,[e("Welcome screen"),a(n)]),e(" that you see when you first start Atom, the "),t("a",w,[e("spell checker"),a(n)]),e(", the "),t("a",y,[e("themes"),a(n)]),e(" and the "),t("a",_,[e("Fuzzy Finder"),a(n)]),e(" are all packages that are separately maintained and all use the same APIs that you have access to, as we'll see in great detail in "),a(i,{to:"/hacking-atom/"},{default:s(()=>[e("Hacking Atom")]),_:1}),e(".")]),x,t("p",null,[e('Clicking on "Install" will install the theme and make it available in the Theme dropdowns as we saw in '),a(i,{to:"/getting-started/sections/atom-basics/#changing-the-theme"},{default:s(()=>[e("Changing the Theme")]),_:1}),e(".")]),A,t("p",null,[e("For example "),C,e(" installs the "),S,e(" release of the "),t("a",I,[e("Emmet"),a(n)]),e(" package.")]),q])}const F=m(g,[["render",T],["__file","atom-packages.html.vue"]]);export{F as default};
