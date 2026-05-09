<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HotelsBook - Consultoria Estratégica e Inteligência para Hotelaria</title>
  <meta name="description" content="Consultoria hoteleira, Revenue Management e agenciamento de reservas corporativas. Soluções tecnológicas para maximizar receita.">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- AOS Animation Library -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy: '#0a1628',
            lightblue: '#3b82f6',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  
  <style>
    html {
      scroll-behavior: smooth;
    }
    
    /* Gradient Animation */
    .gradient-animate {
      background: linear-gradient(-45deg, #0a1628, #1e3a8a, #3b82f6, #0a1628);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    }
    
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    /* Floating Animation */
    .float {
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    /* Pulse Animation */
    .pulse-slow {
      animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    /* Parallax Effect */
    .parallax {
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    
    /* Glass Effect */
    .glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    /* Smooth Card Hover */
    .card-hover {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card-hover:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    
    /* Text Gradient */
    .text-gradient {
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    /* Hero Overlay Pattern */
    .hero-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  </style>
</head>
<body class="font-sans antialiased">

  <!-- Navigation -->
  <nav class="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300" id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex-shrink-0 flex items-center" data-aos="fade-right">
          <h1 class="text-2xl font-bold text-navy">HotelsBook</h1>
        </div>
        
        <div class="hidden md:flex space-x-8" data-aos="fade-left">
          <a href="#servicos" class="text-gray-700 hover:text-lightblue transition-colors duration-300 font-medium">Serviços</a>
          <a href="#sobre" class="text-gray-700 hover:text-lightblue transition-colors duration-300 font-medium">Sobre</a>
          <a href="#analytics" class="text-gray-700 hover:text-lightblue transition-colors duration-300 font-medium">Analytics</a>
          <a href="#hospped" class="text-gray-700 hover:text-lightblue transition-colors duration-300 font-medium">Hospped</a>
          <a href="#contato" class="bg-navy text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium">Contato</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section Full Width -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden gradient-animate">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1542314831-068cd1726a38?auto=format&fit=crop&w=2070&q=80" 
           alt="Hotel luxury" 
           class="w-full h-full object-cover opacity-30">
      <div class="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90"></div>
      <div class="absolute inset-0 hero-pattern opacity-20"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 text-center" data-aos="fade-up" data-aos-duration="1000">
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight float">
        Inteligência e consultoria<br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">estratégica para hotelaria</span>
      </h1>
      
      <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
        Unimos expertise em gestão hoteleira com tecnologia proprietária para profissionalizar operações, maximizar receitas e escalar negócios.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="400">
        <a href="#contato" class="group bg-white text-navy hover:bg-blue-50 font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl hover:shadow-white/30 flex items-center justify-center">
          Agendar Consultoria
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
        <a href="#analytics" class="border-2 border-white text-white hover:bg-white hover:text-navy font-bold py-5 px-10 rounded-full transition-all duration-300 flex items-center justify-center">
          Conhecer Analytics
        </a>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-20 bg-gradient-to-r from-navy to-blue-900 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80" class="w-full h-full object-cover">
    </div>
    
    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="text-white" data-aos="fade-up" data-aos-delay="0">
          <div class="text-4xl md:text-5xl font-bold mb-2 text-lightblue">100%</div>
          <div class="text-blue-200">Foco em Resultados</div>
        </div>
        <div class="text-white" data-aos="fade-up" data-aos-delay="100">
          <div class="text-4xl md:text-5xl font-bold mb-2 text-lightblue">Nacional</div>
          <div class="text-blue-200">Atuação</div>
        </div>
        <div class="text-white" data-aos="fade-up" data-aos-delay="200">
          <div class="text-4xl md:text-5xl font-bold mb-2 text-lightblue">IA + Dados</div>
          <div class="text-blue-200">Tecnologia</div>
        </div>
        <div class="text-white" data-aos="fade-up" data-aos-delay="300">
          <div class="text-4xl md:text-5xl font-bold mb-2 text-lightblue">24h</div>
          <div class="text-blue-200">Retorno</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="servicos" class="py-24 bg-gray-50 relative">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-navy mb-4">Soluções completas<br>para sua empresa</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-navy to-lightblue mx-auto rounded-full"></div>
        <p class="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">Ecossistema integrado de serviços que vai da consultoria estratégica à tecnologia de ponta</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Consultoria Card -->
        <div class="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover" data-aos="fade-up" data-aos-delay="0">
          <div class="relative h-64 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1074&q=80" 
                 alt="Consultoria" 
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-2xl font-bold text-white">HotelsBook Consultoria</h3>
            </div>
          </div>
          <div class="p-8">
            <p class="text-gray-600 mb-6 leading-relaxed">Expertise em gestão e consultoria para meios de hospitalidade. Diagnóstico operacional completo e planejamento tático.</p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-lightblue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Atendimento presencial ou remoto
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-lightblue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Revenue Management especializado
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-lightblue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Resultados mensuráveis
              </li>
            </ul>
            <a href="#contato" class="inline-flex items-center text-navy font-semibold hover:text-lightblue transition-colors">
              Solicitar diagnóstico
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Analytics Card -->
        <div class="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover" data-aos="fade-up" data-aos-delay="100">
          <div class="relative h-64 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80" 
                 alt="Analytics" 
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-2xl font-bold text-white">HotelsBook Analytics</h3>
            </div>
          </div>
          <div class="p-8">
            <p class="text-gray-600 mb-6 leading-relaxed">Plataforma de Revenue Management com parser adaptativo e IA generativa. Análise de dados e sazonalidade em tempo real.</p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-lightblue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Parser adaptativo para qualquer PMS
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-lightblue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Previsão de sazonalidade com IA
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-lightblue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Insights acionáveis em minutos
              </li>
            </ul>
            <a href="#analytics" class="inline-flex items-center text-navy font-semibold hover:text-lightblue transition-colors">
              Conhecer plataforma
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Hospped Card -->
        <div class="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover" data-aos="fade-up" data-aos-delay="200">
          <div class="relative h-64 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1174&q=80" 
                 alt="Hospped" 
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-2xl font-bold text-white">Hospped</h3>
            </div>
          </div>
          <div class="p-8">
            <p class="text-gray-600 mb-6 leading-relaxed">Consultoria e gestão de viagens para empresas e instituições. Reservas corporativas e mobilidade acadêmica.</p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-lightblue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Negociação direta com rede hoteleira
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-lightblue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Relatórios analíticos de gastos
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-lightblue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Atendimento B2B e B2C
              </li>
            </ul>
            <a href="https://hotelsbook.github.io/hospped/" class="inline-flex items-center text-navy font-semibold hover:text-lightblue transition-colors">
              Visitar Hospped
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Full Width Parallax Section -->
  <section class="parallax relative py-32" style="background-image: url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2025&q=80');">
    <div class="absolute inset-0 bg-navy/70"></div>
    <div class="relative z-10 max-w-5xl mx-auto px-4 text-center text-white" data-aos="fade-up">
      <h2 class="text-4xl md:text-6xl font-bold mb-6">Tecnologia que transforma a hotelaria</h2>
      <p class="text-xl md:text-2xl text-blue-100 mb-10">Soluções proprietárias desenvolvidas para maximizar seus resultados</p>
      <a href="#contato" class="inline-block bg-white text-navy hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-2xl">
        Falar com especialista
      </a>
    </div>
  </section>

  <!-- Team Section -->
  <section id="sobre" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-navy mb-4">Nossa Equipe</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-navy to-lightblue mx-auto rounded-full"></div>
        <p class="text-xl text-gray-600 mt-6">Profissionais experientes dedicados ao seu sucesso</p>
      </div>
      
      <div class="grid md:grid-cols-4 gap-8">
        <div class="text-center group" data-aos="fade-up" data-aos-delay="0">
          <div class="relative mb-4 inline-block">
            <div class="absolute inset-0 bg-gradient-to-r from-navy to-lightblue rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=634&q=80" 
                 alt="Caio Reis" 
                 class="relative w-40 h-40 rounded-full object-cover mx-auto border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
          </div>
          <h4 class="font-bold text-navy text-lg">Caio Reis</h4>
          <p class="text-lightblue font-medium text-sm">Sócio Fundador</p>
          <p class="text-gray-500 text-xs mt-2">Consultoria B2B e Estratégia</p>
        </div>
        
        <div class="text-center group" data-aos="fade-up" data-aos-delay="100">
          <div class="relative mb-4 inline-block">
            <div class="absolute inset-0 bg-gradient-to-r from-navy to-lightblue rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=634&q=80" 
                 alt="Mariana Cíntia" 
                 class="relative w-40 h-40 rounded-full object-cover mx-auto border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
          </div>
          <h4 class="font-bold text-navy text-lg">Mariana Cíntia</h4>
          <p class="text-lightblue font-medium text-sm">Sócia Fundadora</p>
          <p class="text-gray-500 text-xs mt-2">Relacionamento com Clientes</p>
        </div>
        
        <div class="text-center group" data-aos="fade-up" data-aos-delay="200">
          <div class="relative mb-4 inline-block">
            <div class="absolute inset-0 bg-gradient-to-r from-navy to-lightblue rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=634&q=80" 
                 alt="Filipe Soares" 
                 class="relative w-40 h-40 rounded-full object-cover mx-auto border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
          </div>
          <h4 class="font-bold text-navy text-lg">Filipe Soares</h4>
          <p class="text-lightblue font-medium text-sm">Sócio Fundador</p>
          <p class="text-gray-500 text-xs mt-2">Tecnologia e Inovação</p>
        </div>
        
        <div class="text-center group" data-aos="fade-up" data-aos-delay="300">
          <div class="relative mb-4 inline-block">
            <div class="absolute inset-0 bg-gradient-to-r from-navy to-lightblue rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1170&q=80" 
                 alt="Mateus Reis" 
                 class="relative w-40 h-40 rounded-full object-cover mx-auto border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
          </div>
          <h4 class="font-bold text-navy text-lg">Mateus Reis</h4>
          <p class="text-lightblue font-medium text-sm">Sócio Fundador</p>
          <p class="text-gray-500 text-xs mt-2">Operações e Desenvolvimento</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contato" class="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-navy mb-4">Entre em contato</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-navy to-lightblue mx-auto rounded-full"></div>
        <p class="text-xl text-gray-600 mt-6">Pronto para transformar sua operação?</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8" data-aos="fade-right">
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <h3 class="text-2xl font-bold text-navy mb-6">Informações de Contato</h3>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-navy to-lightblue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-navy mb-1">Email</h4>
                  <p class="text-gray-600">contato@hotelsbook.com.br</p>
                  <p class="text-gray-600">comercial@hotelsbook.com.br</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-navy to-lightblue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-navy mb-1">WhatsApp</h4>
                  <p class="text-gray-600"><strong>B2C (Reservas):</strong> (85) 98405-2096</p>
                  <p class="text-gray-600"><strong>B2B (Consultoria):</strong> (88) 92154-6413</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-navy to-lightblue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-navy mb-1">Horário de Atendimento</h4>
                  <p class="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p class="text-gray-600">Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-2xl shadow-lg" data-aos="fade-left">
          <h3 class="text-2xl font-bold text-navy mb-6">Envie uma mensagem</h3>
          <form class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
              <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightblue focus:border-transparent transition" placeholder="Seu nome">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email corporativo</label>
              <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightblue focus:border-transparent transition" placeholder="seu@email.com">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightblue focus:border-transparent transition">
                <option>Consultoria Estratégica</option>
                <option>HotelsBook Analytics</option>
                <option>Hospped - Reservas</option>
                <option>Parcerias</option>
                <option>Outro</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
              <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightblue focus:border-transparent transition" placeholder="Como podemos ajudar?"></textarea>
            </div>
            
            <button type="submit" class="w-full bg-gradient-to-r from-navy to-blue-900 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-navy text-white py-16">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div class="col-span-2">
          <h3 class="text-3xl font-bold mb-4">HotelsBook</h3>
          <p class="text-blue-100 mb-6 max-w-md">A sua referência em serviços de hospitalidade. Consultoria estratégica e soluções tecnológicas.</p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-lightblue transition-colors duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-lightblue transition-colors duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="font-bold text-lg mb-4">Serviços</h4>
          <ul class="space-y-2 text-blue-100">
            <li><a href="#" class="hover:text-white transition">Consultoria</a></li>
            <li><a href="#" class="hover:text-white transition">Analytics</a></li>
            <li><a href="#" class="hover:text-white transition">Hospped</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold text-lg mb-4">Contato</h4>
          <ul class="space-y-2 text-blue-100">
            <li>contato@hotelsbook.com.br</li>
            <li>(85) 98405-2096</li>
            <li>(88) 92154-6413</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-blue-800 pt-8 text-center text-blue-100">
        <p>&copy; 2026 HotelsBook Tecnologia e Hospitalidade LTDA. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>

  <!-- AOS Animation Library Script -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
      } else {
        navbar.classList.remove('shadow-md');
      }
    });
  </script>
</body>
</html>