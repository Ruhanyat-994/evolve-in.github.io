---
layout: default
title: Blog
permalink: /blog/
---

<div class="blog-page">
  <div class="container">
    <h2 class="section-title">Fitmaker <span class="highlight">Blog</span></h2>
    <p class="subtitle">All our latest articles, guides, and tips to help you reach your goals.</p>
    
    <div class="blog-page-grid">
      
      {% for post in site.posts %}
      <div class="blog-card">
        <a href="{{ post.url | relative_url }}">
          <div class="card-image">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
          </div>
          <div class="card-content">
            <h3>{{ post.title }}</h3>
            <div class="post-meta">
              <span>📅 {{ post.date | date: "%B %d, %Y" }}</span>
              <span>🏷️ {{ post.category }}</span>
            </div>
            <p>{{ post.description }}</p>
            <span class="learn-more">Read More <span>→</span></span>
          </div>
        </a>
      </div>
      {% endfor %}

    </div>
  </div>
</div>
