# Algoritmos Javascript 🧮

Uma aplicação web interativa que implementa algoritmos fundamentais em JavaScript para cálculo de IMC (Índice de Massa Corporal) e resolução de equações quadráticas usando a Fórmula de Bhaskara.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como uma ferramenta educacional e prática para demonstrar a implementação de algoritmos matemáticos essenciais em JavaScript, oferecendo uma interface moderna e intuitiva para realizar cálculos de forma rápida e precisa.

### ✨ Funcionalidades

#### 🏃‍♂️ Calculadora de IMC
- **Cálculo Automático**: Calcula o IMC baseado em peso (kg) e altura (m)
- **Classificação Automática**: Categoriza o resultado segundo padrões da OMS
- **Tabela de Referência**: Mostra todas as faixas de classificação do IMC
- **Interface Intuitiva**: Campos claramente identificados com validação

#### 📐 Fórmula de Bhaskara
- **Resolução Completa**: Resolve equações quadráticas do tipo ax² + bx + c = 0
- **Cálculo do Delta**: Mostra o discriminante da equação
- **Raízes Reais**: Calcula x₁ e x₂ quando existem soluções reais
- **Tratamento de Casos**: Identifica quando não há raízes reais
- **Visualização da Equação**: Mostra a equação formatada com cores

### 🎨 Características do Design

- **Interface Glassmorphism**: Efeito de vidro moderno com blur
- **Sistema de Abas**: Navegação fluida entre as duas calculadoras
- **Paleta Pastel**: Cores suaves e harmoniosas (azul, rosa, verde, roxo)
- **Gradientes Dinâmicos**: Background com gradiente multi-colorido
- **Responsividade Total**: Funciona perfeitamente em todos os dispositivos
- **Transições Suaves**: Animações elegantes em todas as interações

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização avançada com Tailwind CSS
- **JavaScript (ES6+)**: Lógica dos algoritmos e interatividade
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida
- **Google Fonts (Inter)**: Tipografia moderna e legível
- **CSS Custom Properties**: Configuração personalizada do Tailwind

## 📁 Estrutura do Projeto

```
algoritmos-javascript/
├── index.html          # Página principal com ambas as calculadoras
├── script.js           # Lógica JavaScript dos algoritmos
├── css/
│   ├── style.css       # Arquivo principal de estilos
│   └── body.css        # Reset CSS básico
└── README.md           # Este arquivo
```

## 🔧 Como Usar

### Pré-requisitos

- Navegador web moderno com suporte a ES6+
- Conexão com internet (para fontes do Google e Tailwind CDN)

### Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd algoritmos-javascript
   ```

2. **Abra a aplicação**:
   - Abra o arquivo `index.html` diretamente no navegador
   - Ou use um servidor local como Live Server (VSCode)

3. **Use as calculadoras**:
   - **IMC**: Insira peso e altura, clique em "calcular IMC"
   - **Bhaskara**: Insira os coeficientes a, b e c, clique em "calcular Raízes"

## 💡 Algoritmos Implementados

### 📊 Cálculo de IMC

```javascript
// Fórmula: IMC = peso / (altura²)
const imc = peso / (altura * altura);

// Classificações:
// < 18.5: Abaixo do peso
// 18.5-24.9: Peso normal
// 25-29.9: Sobrepeso
// 30-34.9: Obesidade grau 1
// 35-39.9: Obesidade grau 2
// ≥ 40: Obesidade grau 3
```

### 🔢 Fórmula de Bhaskara

```javascript
// Equação: ax² + bx + c = 0
// Delta: Δ = b² - 4ac
const delta = (b * b) - (4 * a * c);

// Raízes (quando Δ ≥ 0):
// x₁ = (-b + √Δ) / 2a
// x₂ = (-b - √Δ) / 2a
const x1 = (-b + Math.sqrt(delta)) / (2 * a);
const x2 = (-b - Math.sqrt(delta)) / (2 * a);
```

## 🎯 Casos de Uso

### Calculadora de IMC
- **Área da Saúde**: Profissionais podem calcular IMC de pacientes
- **Fitness**: Personal trainers e nutricionistas
- **Educação**: Ensino de conceitos de saúde
- **Uso Pessoal**: Monitoramento individual de saúde

### Fórmula de Bhaskara
- **Educação Matemática**: Ensino de equações quadráticas
- **Engenharia**: Cálculos de trajetórias e parábolas
- **Física**: Problemas de movimento uniformemente variado
- **Estudos**: Resolução rápida de exercícios

## 🔍 Validações e Tratamentos

- **Validação de Entrada**: Verifica se os valores são números válidos
- **Prevenção de Divisão por Zero**: Trata o caso quando a = 0 em Bhaskara
- **Valores Negativos**: Permite pesos e alturas apenas positivos
- **Precisão Decimal**: Resultados formatados com precisão apropriada
- **Feedback Visual**: Mostra/oculta seções conforme necessário

## 🤝 Contribuição

Contribuições são muito bem-vindas! Para contribuir:

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaCalculadora`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova calculadora'`)
4. Push para a branch (`git push origin feature/NovaCalculadora`)
5. Abra um Pull Request

## 📚 Conceitos Demonstrados

- **Algoritmos Matemáticos**: Implementação de fórmulas fundamentais
- **Validação de Dados**: Tratamento de entradas do usuário
- **Manipulação do DOM**: Interação dinâmica com elementos HTML
- **Event Handling**: Captura e tratamento de eventos
- **Responsive Design**: Layout adaptável a diferentes telas
- **CSS Moderno**: Uso de glassmorphism e gradientes
- **JavaScript ES6+**: Sintaxe moderna e boas práticas

## 👨‍🏫 Orientação

**Orientador**: Luan Oliveira dos Santos
