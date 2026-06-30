// ===== CONFETTI & CO. — SHARED COMPONENTS =====
// Party Supplies & Decoration Store
// Shared navbar + footer injected across all pages

(function () {
    'use strict';

    const BRAND_NAME = 'PartyPop';
    const BRAND_TAGLINE = 'Making Every Celebration Unforgettable';
    const CURRENT_YEAR = new Date().getFullYear();
    const PHONE = '+1 (555) 927-3456';
    const EMAIL = 'hello@partypop.com';
    const ADDRESS = '28 Celebration Avenue, Festival District';

    const NAV_LINKS = [
        { label: 'Home', href: 'index.html' },
        { label: 'Home 2', href: 'home2.html' },
        { label: 'About', href: 'about.html' },
        { label: 'Services', href: 'services.html' },
        { label: 'Pricing', href: 'pricing.html' },
        { label: 'Contact', href: 'contact.html' }
    ];

    const SOCIAL_LINKS = [
        { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
        { icon: 'fab fa-pinterest-p', href: '#', label: 'Pinterest' },
        { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
        { icon: 'fab fa-tiktok', href: '#', label: 'TikTok' }
    ];

    // --- Brand Logo SVG (Popping Balloon with Confetti) ---
    const LOGO_SVG = `<svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="balloonGrad" x1="30%" y1="0%" x2="70%" y2="100%">
                <stop offset="0%" stop-color="#F06A99"/>
                <stop offset="100%" stop-color="#E8457C"/>
            </linearGradient>
            <linearGradient id="burstGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F9A8C9"/>
                <stop offset="100%" stop-color="#E8457C"/>
            </linearGradient>
        </defs>
        <!-- Balloon body -->
        <ellipse cx="45" cy="45" rx="22" ry="28" fill="url(#balloonGrad)" opacity="0.9"/>
        <!-- Balloon shine -->
        <ellipse cx="38" cy="35" rx="6" ry="10" fill="white" opacity="0.25" transform="rotate(-15 38 35)"/>
        <!-- Balloon knot -->
        <path d="M43 72 L45 75 L47 72" stroke="#C22E60" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <!-- String -->
        <path d="M45 75 Q42 85 48 95" stroke="#C22E60" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.6"/>
        <!-- Confetti burst pieces -->
        <circle cx="72" cy="22" r="4" fill="#E8457C"/>
        <circle cx="78" cy="38" r="3" fill="#F06A99" opacity="0.8"/>
        <circle cx="65" cy="15" r="3" fill="#F9A8C9" opacity="0.9"/>
        <rect x="70" y="30" width="5" height="5" rx="1" fill="#E8457C" opacity="0.7" transform="rotate(35 72 32)"/>
        <rect x="58" y="22" width="4" height="4" rx="1" fill="#F06A99" opacity="0.6" transform="rotate(-20 60 24)"/>
        <!-- Star sparkles -->
        <path d="M80 18 L82 14 L84 18 L88 20 L84 22 L82 26 L80 22 L76 20 Z" fill="#F9A8C9" opacity="0.8"/>
        <path d="M68 8 L69 5 L70 8 L73 9 L70 10 L69 13 L68 10 L65 9 Z" fill="#E8457C" opacity="0.6"/>
        <!-- Small dots -->
        <circle cx="85" cy="28" r="2" fill="#F06A99" opacity="0.5"/>
        <circle cx="62" cy="10" r="1.5" fill="#E8457C" opacity="0.4"/>
    </svg>`;

    // --- Get current page filename ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // --- Render Navbar ---
    function renderNavbar() {
        const navLinksDesktop = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage ||
                             (currentPage === '' && link.href === 'index.html') ||
                             (currentPage === 'party' && link.href === 'index.html');
            return `<a href="${link.href}" class="nav-link whitespace-nowrap text-[12.5px] font-semibold tracking-widest uppercase transition-all duration-300 hover:text-[#E8457C] relative group ${isActive ? 'text-[#E8457C]' : 'text-neutral-700 dark:text-neutral-300'}">
                ${link.label}
                <span class="absolute -bottom-1 left-0 h-[1.5px] bg-[#E8457C] transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}"></span>
            </a>`;
        }).join('');

        const navLinksMobile = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage || (currentPage === '' && link.href === 'index.html');
            return `<a href="${link.href}" class="nav-link flex items-center px-5 py-4 text-sm font-semibold uppercase tracking-wider border-b border-neutral-100 dark:border-[#2D2950] hover:text-[#E8457C] transition-all ${isActive ? 'text-[#E8457C] bg-pink-50/40 dark:bg-[#E8457C]/5' : 'text-neutral-700 dark:text-neutral-200'}">
                ${link.label}
            </a>`;
        }).join('');

        return `
        <nav id="main-nav" class="sticky top-0 z-50 backdrop-blur-md border-b border-[#F0E4D8] dark:border-[#2D2950] transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-6">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="index.html" class="flex items-center gap-2.5 group shrink-0">
                        ${LOGO_SVG}
                        <span class="font-bold text-xl tracking-tight text-[#1E1B2E] dark:text-[#F5EDE6] group-hover:text-[#E8457C] transition-colors" style="font-family: 'Playfair Display', serif;">
                            ${BRAND_NAME}
                        </span>
                    </a>

                    <!-- Desktop Nav -->
                    <div id="desktop-links" class="hidden xl:flex items-center gap-4 xl:gap-5">
                        ${navLinksDesktop}
                    </div>

                    <!-- Right Actions -->
                    <div class="flex items-center gap-2">
                        <!-- RTL Toggle -->
                        <button id="dir-toggle" class="js-dir-toggle hidden xl:flex w-10 h-10 items-center justify-center rounded-xl bg-white dark:bg-[#1C1930] border border-[#F0E4D8] dark:border-[#2D2950] hover:border-[#E8457C] text-neutral-500 dark:text-neutral-400 hover:text-[#E8457C] transition-all shadow-sm" aria-label="Toggle RTL">
                            <i class="fas fa-exchange-alt text-sm"></i>
                        </button>

                        <!-- Theme Toggle -->
                        <button id="theme-toggle-desktop" class="js-theme-toggle hidden xl:flex w-10 h-10 items-center justify-center rounded-xl bg-white dark:bg-[#1C1930] border border-[#F0E4D8] dark:border-[#2D2950] hover:border-[#E8457C] text-neutral-500 dark:text-neutral-400 hover:text-[#E8457C] transition-all shadow-sm" aria-label="Toggle theme">
                            <i class="fas fa-moon text-sm"></i>
                        </button>

                        <!-- Secondary CTA -->
                        <a href="signup.html" class="hidden xl:inline-flex items-center gap-2 border border-[#E8457C] text-[#E8457C] px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-[#E8457C] hover:text-white transition-all whitespace-nowrap">
                            Sign Up
                        </a>

                        <!-- Mobile Menu Btn -->
                        <button id="mobile-menu-btn" class="xl:hidden p-2.5 rounded-xl bg-white dark:bg-[#1C1930] border border-[#F0E4D8] dark:border-[#2D2950] text-neutral-700 dark:text-neutral-300 transition-all" aria-label="Toggle menu">
                            <i class="fas fa-bars text-lg" id="menu-icon"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden xl:hidden border-b border-[#F0E4D8] dark:border-[#2D2950]" style="position: absolute; top: 100%; left: 0; right: 0; z-index: 100; max-height: 85vh; overflow-y: auto;">
                <div class="max-w-7xl mx-auto pt-2 pb-6">
                    <div class="flex flex-col gap-0 mb-4">
                        ${navLinksMobile}
                    </div>
                    <div class="flex flex-col sm:flex-row items-center gap-3 px-5 pt-4 border-t border-neutral-100 dark:border-[#2D2950]">
                        <div class="flex gap-2 w-full sm:w-auto">
                            <button class="js-dir-toggle flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1C1930] border border-[#F0E4D8] dark:border-[#2D2950] text-neutral-600 dark:text-neutral-400 flex-1 sm:flex-none justify-center text-sm">
                                <i class="fas fa-exchange-alt text-sm"></i>
                                <span class="text-xs font-bold uppercase tracking-wider">LTR / RTL</span>
                            </button>
                            <button class="js-theme-toggle flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1C1930] border border-[#F0E4D8] dark:border-[#2D2950] text-neutral-600 dark:text-neutral-400 flex-1 sm:flex-none justify-center text-sm">
                                <i class="fas fa-moon text-sm"></i>
                                <span class="text-xs font-bold uppercase tracking-wider">Theme</span>
                            </button>
                        </div>
                        <div class="flex gap-2 w-full sm:w-auto">
                            <a href="signup.html" class="flex-1 sm:flex-none text-center border border-[#E8457C] text-[#E8457C] px-5 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#E8457C] hover:text-white transition-all">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`;
    }

    // --- Render Footer ---
    function renderFooter() {
        const socialLinksHtml = SOCIAL_LINKS.map(s =>
            `<a href="${s.href}" aria-label="${s.label}" class="w-10 h-10 flex items-center justify-center rounded-full border border-[#F0E4D8] dark:border-[#2D2950] text-neutral-500 dark:text-neutral-400 hover:text-[#E8457C] hover:border-[#E8457C] hover:-translate-y-1 transition-all duration-300">
                <i class="${s.icon} text-sm"></i>
            </a>`
        ).join('');

        return `
        <footer class="bg-[#FFF5EE] dark:bg-[#0A0914] border-t border-[#F0E4D8] dark:border-[#2D2950] pt-16 pb-6 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <!-- Main Footer Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
                    <!-- Brand -->
                    <div class="lg:col-span-1 space-y-5">
                        <a href="index.html" class="flex items-center gap-2.5 group">
                            ${LOGO_SVG}
                            <span class="font-bold text-xl tracking-tight text-[#1E1B2E] dark:text-[#F5EDE6]" style="font-family: 'Playfair Display', serif;">${BRAND_NAME}</span>
                        </a>
                        <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            ${BRAND_TAGLINE}. From balloons to backdrops, we bring joy and color to every celebration.
                        </p>
                        <div class="flex gap-3">${socialLinksHtml}</div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="font-bold mb-5 text-[#1E1B2E] dark:text-white uppercase text-xs tracking-[0.15em]">Quick Links</h4>
                        <ul class="space-y-2.5">
                            <li><a href="index.html" class="footer-link">Home</a></li>
                            <li><a href="home2.html" class="footer-link">Home 2 — Premium</a></li>
                            <li><a href="services.html" class="footer-link">Services</a></li>
                            <li><a href="pricing.html" class="footer-link">Pricing</a></li>
                            <li><a href="about.html" class="footer-link">About Us</a></li>
                        </ul>
                    </div>

                    <!-- Resources -->
                    <div>
                        <h4 class="font-bold mb-5 text-[#1E1B2E] dark:text-white uppercase text-xs tracking-[0.15em]">Resources</h4>
                        <ul class="space-y-2.5">
                            <li><a href="contact.html" class="footer-link">Contact Us</a></li>
                            <li><a href="coming-soon.html" class="footer-link">Coming Soon</a></li>
                            <li><a href="404.html" class="footer-link">404 Page</a></li>
                            <li><a href="login.html" class="footer-link">Sign In</a></li>
                        </ul>
                    </div>

                    <!-- Newsletter -->
                    <div class="bg-white dark:bg-[#141220] p-6 rounded-2xl border border-[#F0E4D8] dark:border-[#2D2950]">
                        <h4 class="font-bold mb-2 text-[#1E1B2E] dark:text-white" style="font-family:'Playfair Display',serif;font-size:1.1rem;">Party Updates 🎉</h4>
                        <p class="text-xs text-neutral-500 dark:text-neutral-400 mb-4">Subscribe for new themes, party tips & exclusive discounts on decoration packages.</p>
                        <form id="newsletter-form" class="space-y-2.5">
                            <input type="email" required placeholder="your@email.com"
                                class="w-full px-4 py-3 text-sm bg-[#FFFAF5] dark:bg-[#1C1930] border border-[#F0E4D8] dark:border-[#2D2950] focus:border-[#E8457C] focus:ring-2 focus:ring-[#E8457C]/20 rounded-xl outline-none transition-all dark:text-white placeholder:text-neutral-400" />
                            <button type="submit" class="w-full bg-gradient-to-r from-[#E8457C] to-[#C22E60] hover:from-[#F06A99] hover:to-[#E8457C] text-white text-sm font-bold py-3 rounded-xl transition-all">
                                Subscribe
                            </button>
                        </form>
                        <p id="newsletter-success" class="hidden text-xs text-emerald-500 mt-2 font-bold text-center">🎊 Thank you for subscribing!</p>
                    </div>
                </div>

                <!-- Bottom Bar -->
                <div class="border-t border-[#F0E4D8] dark:border-[#2D2950] pt-8">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p class="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                            &copy; ${CURRENT_YEAR} ${BRAND_NAME} Crafted with 🎉 celebration.
                        </p>
                        <div class="flex items-center gap-6">
                            <a href="#" class="text-[11px] uppercase tracking-widest text-neutral-400 hover:text-[#E8457C] transition-colors">Privacy</a>
                            <a href="#" class="text-[11px] uppercase tracking-widest text-neutral-400 hover:text-[#E8457C] transition-colors">Terms</a>
                            <span class="text-[11px] uppercase tracking-widest text-neutral-400">${PHONE}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Back to Top -->
        <button id="back-to-top" aria-label="Back to top" class="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E8457C] to-[#C22E60] text-white border-none cursor-pointer opacity-0 translate-y-5 transition-all duration-300 hover:-translate-y-1 hover:scale-110 shadow-lg shadow-[#E8457C]/30 active:scale-95">
            <i class="fas fa-chevron-up text-sm"></i>
        </button>`;
    }

    // --- Inject Global Styles ---
    function injectGlobalStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .grid-2 > .card, .grid-3 > .card, .grid-4 > .card { display: flex !important; flex-direction: column !important; height: 100% !important; align-self: stretch !important; }
            .grid-2 > .card > *:last-child, .grid-3 > .card > *:last-child, .grid-4 > .card > *:last-child { margin-top: auto !important; }
            .grid-2 > .pricing-card, .grid-3 > .pricing-card, .grid-4 > .pricing-card { display: flex !important; flex-direction: column !important; height: 100% !important; align-self: stretch !important; }
            .pricing-card .btn { margin-top: auto !important; }
            .grid-2 { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; align-items: stretch !important; }
            .grid-3 { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 24px !important; align-items: stretch !important; }
            .grid-4 { display: grid !important; grid-template-columns: repeat(4, 1fr) !important; gap: 24px !important; align-items: stretch !important; }
            .animate-on-scroll.visible { transform: none !important; will-change: auto !important; }
            @media (max-width: 1024px) {
                .grid-2 { grid-template-columns: 1fr !important; }
                .grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
                .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 769px) and (max-width: 1024px) {
                .grid-3 > *:last-child:nth-child(odd),
                .grid-4 > *:last-child:nth-child(odd) {
                    grid-column: 1 / span 2 !important;
                    max-width: calc(50% - 12px) !important;
                    width: 100% !important;
                    margin: 0 auto !important;
                }
            }
            @media (max-width: 768px) {
                .grid-3 { grid-template-columns: 1fr !important; }
                .grid-4 { grid-template-columns: 1fr !important; }
            }
        `;
        document.head.appendChild(style);
    }

    // --- Initialize ---
    function init() {
        injectGlobalStyles();

        const navContainer = document.getElementById('navbar-container');
        if (navContainer) navContainer.innerHTML = renderNavbar();

        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) footerContainer.innerHTML = renderFooter();

        initTheme();
        initDirection();
        initMobileMenu();
        initScrollEffects();
        initNewsletter();
        initScrollReveal();
    }

    // --- Theme ---
    function initTheme() {
        const html = document.documentElement;
        const themeBtns = document.querySelectorAll('.js-theme-toggle');

        const setTheme = (isDark) => {
            if (isDark) {
                html.classList.add('dark');
                themeBtns.forEach(btn => {
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = 'fas fa-sun text-sm text-yellow-400';
                    const span = btn.querySelector('span');
                    if (span) span.textContent = 'Light Mode';
                });
                localStorage.setItem('party-dark-mode', 'true');
            } else {
                html.classList.remove('dark');
                themeBtns.forEach(btn => {
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = 'fas fa-moon text-sm';
                    const span = btn.querySelector('span');
                    if (span) span.textContent = 'Dark Mode';
                });
                localStorage.setItem('party-dark-mode', 'false');
            }
        };

        themeBtns.forEach(btn => btn.addEventListener('click', () => setTheme(!html.classList.contains('dark'))));

        const stored = localStorage.getItem('party-dark-mode');
        if (stored === 'true' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }

    // --- Direction ---
    function initDirection() {
        const html = document.documentElement;
        const dirBtns = document.querySelectorAll('.js-dir-toggle');

        const setDir = (dir) => {
            html.setAttribute('dir', dir);
            localStorage.setItem('party-rtl', dir === 'rtl' ? 'true' : 'false');
            dirBtns.forEach(btn => {
                const span = btn.querySelector('span');
                if (span) span.textContent = dir === 'rtl' ? 'RTL' : 'LTR';
            });
        };

        dirBtns.forEach(btn => btn.addEventListener('click', () => {
            setDir((html.getAttribute('dir') || 'ltr') === 'ltr' ? 'rtl' : 'ltr');
        }));

        localStorage.getItem('party-rtl') === 'true' ? setDir('rtl') : setDir('ltr');
    }

    // --- Mobile Menu ---
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.toggle('hidden');
                if (menuIcon) menuIcon.className = isHidden ? 'fas fa-bars text-lg' : 'fas fa-times text-lg';
            });
        }
    }

    // --- Scroll Effects ---
    function initScrollEffects() {
        const backToTop = document.getElementById('back-to-top');
        const nav = document.getElementById('main-nav');

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            if (backToTop) {
                backToTop.classList.toggle('opacity-0', scrollTop <= 400);
                backToTop.classList.toggle('translate-y-5', scrollTop <= 400);
                backToTop.classList.toggle('opacity-100', scrollTop > 400);
                backToTop.classList.toggle('translate-y-0', scrollTop > 400);
            }
            if (nav) nav.classList.toggle('shadow-lg', scrollTop > 10);
        });

        if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // --- Newsletter ---
    function initNewsletter() {
        const form = document.getElementById('newsletter-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const btn = this.querySelector('button[type="submit"]');
                const success = document.getElementById('newsletter-success');
                btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Subscribing...';
                setTimeout(() => {
                    this.classList.add('hidden');
                    if (success) success.classList.remove('hidden');
                }, 1500);
            });
        }
    }

    // --- Scroll Reveal ---
    function initScrollReveal() {
        const revealEls = document.querySelectorAll('.reveal');
        if (!revealEls.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealEls.forEach(el => observer.observe(el));
    }

    // --- DOM Ready ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
