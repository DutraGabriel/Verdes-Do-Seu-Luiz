// ========================================
// VERDES DO SEU LUIZ - SCRIPT PRINCIPAL
// ========================================

// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar funcionalidades comuns
    initMobileMenu();
    initCartFunctionality();
    initFormValidations();
    initAnimations();
});

// ========================================
// MENU MOBILE
// ========================================
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
}

// ========================================
// FUNCIONALIDADES DO CARRINHO
// ========================================
function initCartFunctionality() {
    // Adicionar ao carrinho (página inicial)
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            addToCart(this);
        });
    });

    // Controles de quantidade (página de produtos)
    document.querySelectorAll('.qtd-btn').forEach(btn => {
        if (btn.textContent === '-') {
            btn.addEventListener('click', function() {
                decreaseQuantity(this);
            });
        } else if (btn.textContent === '+') {
            btn.addEventListener('click', function() {
                increaseQuantity(this);
            });
        }
    });
}

function addToCart(btn) {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        let count = parseInt(cartCount.textContent);
        cartCount.textContent = count + 1;
        
        // Feedback visual
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Adicionado';
        btn.style.background = 'var(--secondary-color)';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = 'var(--accent-color)';
        }, 2000);
    }
}

function decreaseQuantity(btn) {
    const quantidadeSpan = btn.parentNode.querySelector('.quantidade');
    if (quantidadeSpan) {
        let quantidade = parseInt(quantidadeSpan.textContent);
        if (quantidade > 1) {
            quantidadeSpan.textContent = quantidade - 1;
            updateCartSummary();
        } else {
            btn.disabled = true;
        }
    }
}

function increaseQuantity(btn) {
    const quantidadeSpan = btn.parentNode.querySelector('.quantidade');
    if (quantidadeSpan) {
        let quantidade = parseInt(quantidadeSpan.textContent);
        quantidadeSpan.textContent = quantidade + 1;
        
        // Reabilita o botão de diminuir
        const btnDiminuir = btn.parentNode.querySelector('.qtd-btn:first-child');
        if (btnDiminuir) {
            btnDiminuir.disabled = false;
        }
        
        updateCartSummary();
    }
}

// ========================================
// FUNCIONALIDADES ESPECÍFICAS DO CARRINHO
// ========================================
function removeCartItem(btn) {
    const item = btn.closest('.item-carrinho');
    if (item) {
        item.style.animation = 'fadeOut 0.3s ease';
        
        setTimeout(() => {
            item.remove();
            updateCartSummary();
            checkEmptyCart();
        }, 300);
    }
}

function updateCartSummary() {
    const itens = document.querySelectorAll('.item-carrinho');
    let subtotal = 0;
    let totalItens = 0;

    itens.forEach(item => {
        const precoElement = item.querySelector('.item-preco');
        const quantidadeElement = item.querySelector('.quantidade');
        
        if (precoElement && quantidadeElement) {
            const preco = parseFloat(
                precoElement.textContent.replace('R$ ', '').replace(',', '.')
            );
            const quantidade = parseInt(quantidadeElement.textContent);
            subtotal += preco * quantidade;
            totalItens += quantidade;
        }
    });

    const frete = 5.0;
    const desconto = 2.0;
    const total = subtotal + frete - desconto;

    // Atualizar valores no resumo
    const subtotalElement = document.querySelector('.resumo-item:first-child span:first-child');
    const subtotalValueElement = document.querySelector('.resumo-item:first-child span:last-child');
    const totalElement = document.querySelector('.resumo-item:last-child span:last-child');

    if (subtotalElement) {
        subtotalElement.textContent = `Subtotal (${totalItens} itens)`;
    }
    if (subtotalValueElement) {
        subtotalValueElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    }
    if (totalElement) {
        totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

function checkEmptyCart() {
    const itens = document.querySelectorAll('.item-carrinho');
    if (itens.length === 0) {
        const itensCarrinho = document.querySelector('.itens-carrinho');
        if (itensCarrinho) {
            itensCarrinho.innerHTML = `
                <div class="carrinho-vazio">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>Seu carrinho está vazio</h3>
                    <p>Adicione alguns produtos para começar suas compras</p>
                    <a href="produtos.html" class="btn-continuar-comprando">
                        Continuar Comprando
                    </a>
                </div>
            `;
        }
    }
}

function applyCoupon() {
    const cupom = document.getElementById('cupom');
    if (cupom && cupom.value.toLowerCase() === 'verde10') {
        alert('Cupom aplicado! Desconto de 10% aplicado.');
        // Aqui você implementaria a lógica de desconto
    } else {
        alert('Cupom inválido. Tente novamente.');
    }
}

function finalizePurchase() {
    alert('Compra finalizada com sucesso! Você será redirecionado para a página de pagamento.');
    // Aqui você implementaria a lógica de finalização
}

// ========================================
// FUNCIONALIDADES ESPECÍFICAS DE PRODUTOS
// ========================================
function filterProducts(categoria) {
    const produtos = document.querySelectorAll('.produto-card');
    let contador = 0;

    produtos.forEach((produto) => {
        if (
            categoria === 'todos' ||
            produto.getAttribute('data-categoria') === categoria
        ) {
            produto.style.display = 'block';
            contador++;
        } else {
            produto.style.display = 'none';
        }
    });

    const quantidadeElement = document.getElementById('quantidade-produtos');
    if (quantidadeElement) {
        quantidadeElement.textContent = contador;
    }
}

function addToCartFromProducts(btn) {
    const produtoCard = btn.closest('.produto-card');
    if (produtoCard) {
        const nome = produtoCard.querySelector('h3').textContent;
        const quantidade = produtoCard.querySelector('.quantidade').textContent;
        const preco = produtoCard.querySelector('.preco-atual').textContent;

        // Simular adição ao carrinho
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + parseInt(quantidade);
        }

        // Feedback visual
        btn.innerHTML = '<i class="fas fa-check"></i> Adicionado';
        btn.style.background = 'var(--secondary-color)';

        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-plus"></i> Adicionar';
            btn.style.background = 'var(--accent-color)';
        }, 2000);

        // Reset quantidade
        const quantidadeElement = produtoCard.querySelector('.quantidade');
        if (quantidadeElement) {
            quantidadeElement.textContent = '1';
        }
    }
}

// ========================================
// FUNCIONALIDADES DE FORMULÁRIOS
// ========================================
function initFormValidations() {
    // Formulário de contato
    const contactForm = document.getElementById('form-contato');
    if (contactForm) {
        contactForm.addEventListener('submit', sendContactMessage);
    }

    // Formulário de login (página de login)
    const loginForm = document.querySelector('.login-form');
    if (loginForm && !document.getElementById('confirmar-senha') && !document.querySelector('.login-form p')) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Formulário de cadastro (página de cadastro)
    const cadastroForm = document.querySelector('.login-form');
    if (cadastroForm && document.getElementById('confirmar-senha')) {
        cadastroForm.addEventListener('submit', handleCadastro);
    }

    // Formulário de recuperar senha (página de recuperar senha)
    const recuperarForm = document.querySelector('.login-form');
    if (recuperarForm && document.querySelector('.login-form p')) {
        recuperarForm.addEventListener('submit', handleRecuperarSenha);
    }

    // Máscara para telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                e.target.value = value;
            }
        });
    }
}

function sendContactMessage(event) {
    event.preventDefault();
    
    const form = event.target;
    const btnEnviar = form.querySelector('.btn-enviar');
    const textoOriginal = btnEnviar.innerHTML;
    
    btnEnviar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btnEnviar.disabled = true;
    
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
        btnEnviar.innerHTML = textoOriginal;
        btnEnviar.disabled = false;
    }, 2000);
}

function handleLogin(event) {
    event.preventDefault();
    
    const btn = event.target.querySelector('button');
    const textoOriginal = btn.textContent;
    
    btn.textContent = 'Entrando...';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('Login realizado com sucesso!');
        btn.textContent = textoOriginal;
        btn.disabled = false;
    }, 2000);
}

function handleCadastro(event) {
    event.preventDefault();
    
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }
    
    const btn = event.target.querySelector('button');
    const textoOriginal = btn.textContent;
    
    btn.textContent = 'Cadastrando...';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('Cadastro realizado com sucesso!');
        btn.textContent = textoOriginal;
        btn.disabled = false;
        event.target.reset();
    }, 2000);
}

function handleRecuperarSenha(event) {
    event.preventDefault();
    
    const btn = event.target.querySelector('button');
    const textoOriginal = btn.textContent;
    
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('E-mail de recuperação enviado! Verifique sua caixa de entrada.');
        btn.textContent = textoOriginal;
        btn.disabled = false;
        event.target.reset();
    }, 2000);
}

// ========================================
// FUNCIONALIDADES DE BUSCA
// ========================================
function initSearch() {
    const buscaInput = document.getElementById('busca-produtos');
    if (buscaInput) {
        buscaInput.addEventListener('input', function() {
            const termo = this.value.toLowerCase();
            const produtos = document.querySelectorAll('.produto-card');
            let contador = 0;

            produtos.forEach((produto) => {
                const nome = produto.querySelector('h3').textContent.toLowerCase();
                const descricao = produto
                    .querySelector('.produto-descricao')
                    .textContent.toLowerCase();

                if (nome.includes(termo) || descricao.includes(termo)) {
                    produto.style.display = 'block';
                    contador++;
                } else {
                    produto.style.display = 'none';
                }
            });

            const quantidadeElement = document.getElementById('quantidade-produtos');
            if (quantidadeElement) {
                quantidadeElement.textContent = contador;
            }
        });
    }
}

// ========================================
// FUNCIONALIDADES DE FILTROS
// ========================================
function initFilters() {
    document.querySelectorAll('.filtro-btn').forEach((btn) => {
        btn.addEventListener('click', function() {
            // Remove active de todos os botões
            document
                .querySelectorAll('.filtro-btn')
                .forEach((b) => b.classList.remove('active'));
            // Adiciona active ao botão clicado
            this.classList.add('active');

            const categoria = this.getAttribute('data-categoria');
            filterProducts(categoria);
        });
    });
}

// ========================================
// ANIMAÇÕES
// ========================================
function initAnimations() {
    // Adicionar animação CSS para fadeOut
    if (!document.getElementById('fadeOut-animation')) {
        const style = document.createElement('style');
        style.id = 'fadeOut-animation';
        style.textContent = `
            @keyframes fadeOut {
                from { opacity: 1; transform: translateX(0); }
                to { opacity: 0; transform: translateX(-20px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// ========================================
// FUNÇÕES GLOBAIS (para compatibilidade)
// ========================================
// Funções que podem ser chamadas diretamente do HTML
window.diminuirQuantidade = decreaseQuantity;
window.aumentarQuantidade = increaseQuantity;
window.adicionarAoCarrinho = addToCartFromProducts;
window.removerItem = removeCartItem;
window.aplicarCupom = applyCoupon;
window.finalizarCompra = finalizePurchase;
window.enviarMensagem = sendContactMessage;

// Inicializar funcionalidades específicas quando necessário
window.initSearch = initSearch;
window.initFilters = initFilters;
