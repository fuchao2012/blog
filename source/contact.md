---
title: Contact
date: 2016-03-11 17:04:49
subtitle: feel free to say anything to me ;)
---
<div id="contact-form" class="form">
  <div class="form-group">
    <label>Your Name</label>
    <input class="form-control" v-model="message.name"/>
  </div>
  <div class="form-group">
    <label>Subject</label>
    <input class="form-control" v-model="message.subject"/>
  </div>
  <div class="form-group">
    <label>Your Email Address (Never spam you, you have my word)</label>
    <input class="form-control" v-model="message.email"/>
  </div>
  <div class="form-group">
    <label>Content</label>
    <textarea class="form-control" rows="5" placeholder="Hi EGOIST..." v-model="message.text"></textarea>
  </div>
  <div class="error" v-cloak v-if="error">${error}</div>
  <div class="success" v-cloak v-if="success">${success}</div>
  <button @click="submit" class="btn" v-if="sending" disabled v-cloak>
    Sending...
  </button>
  <button @click="submit" class="btn" v-else>
    Send to @EGOIST
  </button>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.10/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.9.1/axios.min.js"></script>
<script src="/js/contact.js"></script>
