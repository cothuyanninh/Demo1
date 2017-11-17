!function () {
    function e(e) {
        return String(e).replace(/(\d)(?=(\d{3})+$)/g, "$1,")
    }

    function a(e, a) {
        var t = document.createElement("script");
        t.src = e + "?callback=callback00", t.async = !0, a && (t.onload = a), document.body.appendChild(t)
    }

    function t(e, t) {
        window.gType = e, (m = document.createElement("span")).className = "github-btn", (p = document.createElement("a")).target = "_blank", p.className = "gh-btn", m.appendChild(p);
        var r = document.createElement("span");
        r.className = "gh-ico", p.appendChild(r), (h = document.createElement("span")).className = "gh-text", p.appendChild(h), (i = document.createElement("a")).target = "_blank", i.className = "gh-count", i.innerHTML = "+1K", m.appendChild(i), s && s.appendChild(m), p.href = "https://github.com/" + o + "/", "watch" == gType ? (m.className += " github-watchers", h.innerHTML = "Star ", i.href = "https://github.com/" + o + "/stargazers") : "fork" == gType ? (m.className += " github-forks", h.innerHTML = " Fork ", i.href = "https://github.com/" + o + "/network/members") : "follow" == gType && (m.className += " github-me", h.innerHTML = "Follow @muaz-khan", p.href = "https://github.com/muaz-khan", i.href = "https://github.com/muaz-khan/followers"), "follow" == gType ? a("https://api.github.com/users/muaz-khan", t) : a("https://api.github.com/repos/" + o, t)
    }

    function r(e) {
        if (d) {
            var a = document.createElement("script");
            a.src = "https://api.github.com/repos/" + o + "/issues?sha=master&callback=issuesCallback", a.async = !0, e && (a.onload = e), document.body.appendChild(a)
        } else e && e()
    }

    function n(e) {
        var a = document.createElement("script");
        a.src = "https://api.github.com/repos/" + o + "/commits?sha=master&callback=commitsCallback", a.async = !0, !e && d && (e = r), e && (a.onload = e), document.body.appendChild(a)
    }

    function c(e, a) {
        var t = e - a;
        return t < 6e4 ? Math.round(t / 1e3) + " seconds ago" : t < 36e5 ? Math.round(t / 6e4) + " minutes ago" : t < 864e5 ? Math.round(t / 36e5) + " hours ago" : t < 2592e6 ? Math.round(t / 864e5) + " days ago" : t < 31536e6 ? Math.round(t / 2592e6) + " months ago" : Math.round(t / 31536e6) + " years ago"
    }

    function l(e) {
        return e = e.replace(/```javascript([^```]+)```|```html([^```]+)```/g, "<pre>$1</pre>"), e = e.replace(/```JavaScript([^```]+)```|```html([^```]+)```/g, "<pre>$1</pre>"), e = e.replace(/```js([^```]+)```|```html([^```]+)```/g, "<pre>$1</pre>"), e = e.replace(/```([^```]+)```/g, "<pre>$1</pre>"), e = e.replace(/``([^``]+)``/g, "<pre>$1</pre>"), e = e.replace(/`([^`]+)`/g, "<code>$1</code>"), e = e.replace(/\*\*([^\*\*]+)\*\*/g, "<strong>$1</strong>"), e = e.replace(/#([0-9]+)/g, '<a href="https://github.com/' + o + '/issues/$1" target="_blank">#$1</a>'), e = e.replace(/```([^```]+)```/g, "<pre>$1</pre>"), e = e.replace(/`([^`]+)`/g, "<code>$1</code>")
    }

    var o = window.useThisGithubPath || "muaz-khan/WebRTC-Experiment", s = document.querySelector(".github-stargazers");
    window.callback00 = function (a) {
        "watch" == gType ? i.innerHTML = e(a.data.watchers) : "fork" == gType ? i.innerHTML = e(a.data.forks) : "follow" == gType && (i.innerHTML = e(a.data.followers)), i.style.display = "block"
    };
    var m, i, h, p;
    t("watch", function () {
        var e;
        u ? e = n : d && (e = r), t("fork", function () {
            e ? e(function () {
                t("follow", function () {
                    e != r && d && r()
                })
            }) : t("follow", function () {
                e != r && d && r()
            })
        })
    });
    var d = document.getElementById("github-issues");
    d && (d.innerHTML = '<div style="padding:1em .8em;">Getting latest issues...</div>'), window.issuesCallback = function (e) {
        d.innerHTML = "";
        var a = (e = e.data).length;
        a > 2 && (a = 2);
        for (var t = 0; t < a; t++) {
            var r = e[t], n = document.createElement("div");
            n.className = "commit";
            var o = r.title;
            o.length > 50 ? (o = o.substr(0, 49) + "...", o = '<h2 title="' + r.title + '"><a href="' + r.html_url + '">' + o + "</a></h2><br />") : o = '<h2><a href="' + r.html_url + '">' + r.title + "</a></h2><br />";
            var s = r.body;
            (s = (s = l(s = o + (s = (s = (s = s.replace(/</g, "&lt;").replace(/>/g, "&gt;")).replace(b, g)).replace(/\n/g, " ")))).replace(/  /g, "")).length > 250 && (s = s.substr(0, 249) + "...");
            var m = document.createElement("div");
            m.className = "commit-desc", m.innerHTML = s, n.appendChild(m);
            var i = document.createElement("div");
            i.className = "commit-meta";
            var h = document.createElement("a");
            h.target = "_blank", h.href = r.html_url, h.className = "commit-url", h.innerHTML = r.comments + " Comments (Submitted " + c(new Date, new Date(r.created_at)) + ")", i.appendChild(h);
            var p = document.createElement("div");
            p.className = "authorship";
            var u = new Image(24, 24);
            u.className = "gravatar", r.user && r.user.avatar_url && (u.src = r.user.avatar_url), p.appendChild(u);
            var v = document.createElement("span");
            v.className = "author-name", v.innerHTML = '<a href="' + r.user.html_url + '" rel="author" target="_blank">' + r.user.login + "</a>", p.appendChild(v), i.appendChild(p), n.appendChild(i), d && d.appendChild(n)
        }
    };
    var u = document.getElementById("github-commits");
    u && (u.innerHTML = '<div style="padding:1em .8em;">Getting latest commits...</div>'), window.commitsCallback = function (e) {
        u.innerHTML = "";
        var a = (e = e.data).length;
        a > 2 && (a = 2);
        for (var t = 0; t < a; t++) {
            var r = e[t], n = document.createElement("div");
            n.className = "commit";
            var o = r.commit.message;
            o = l(o = (o = (o = o.replace(/</g, "&lt;").replace(/>/g, "&gt;")).replace(b, g).replace(/\n/g, "<br />")).replace(/\n/g, "<br />"));
            var s = document.createElement("div");
            s.className = "commit-desc", s.innerHTML = o, n.appendChild(s);
            var m = document.createElement("div");
            m.className = "commit-meta";
            var i = document.createElement("a");
            i.target = "_blank", i.href = r.html_url, i.className = "commit-url", i.innerHTML = c(new Date, new Date(r.commit.committer.date)), m.appendChild(i);
            var h = document.createElement("div");
            h.className = "authorship", r.author || (r.author = "muaz-khan");
            var p = new Image(24, 24);
            p.className = "gravatar", p.src = r.author.avatar_url, r.author && r.author.avatar_url || (p.src = "https://goo.gl/KaFpuL"), h.appendChild(p);
            var d = document.createElement("span");
            d.className = "author-name", d.innerHTML = '<a href="' + (r.author.html_url || "https://github.com/muaz-khan") + '" rel="author" target="_blank">' + (r.author.login || "Muaz Khan") + "</a>", h.appendChild(d), m.appendChild(h), n.appendChild(m), u && u.appendChild(n)
        }
    };
    var g = function (e, a, t, r, n, c, l, o, s) {
            "(" == e.charAt(0) && ")" == e.charAt(e.length - 1) && (e = e.slice(1, -1)), a || (e = "http://" + e);
            var m = t.replace(/www\./gi, ""), i = m + (n || "") + (c || "") + (l || "") + (o || "") + (s || "");
            return i.length > 18 && m.length < 18 && (i = i.slice(0, m.length + (18 - m.length)) + "..."), '<a href="' + e + '" target="_blank">' + i.replace("webrtc-experiment.com/", "/").replace("rtcmulticonnection.org/", "/").replace("recordrtc.org/", "/") + "</a>"
        },
        b = /\(?\b(?:(http|https|ftp):\/\/)?((?:www.)?[a-zA-Z0-9\-\.]+[\.][a-zA-Z]{2,4})(?::(\d*))?(?=[\s\/,\.\)])([\/]{1}[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]\(\)]*))?([\#][^\s\n]*)?\)?/gi;
    !function () {
        var e = document.createElement("script");
        e.src = "https://cdn.webrtc-experiment.com/common.js", e.async = !0, document.body.appendChild(e)
    }()
}();