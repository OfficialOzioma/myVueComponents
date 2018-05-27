Vue.component('message', {
	
	props:['title', 'body'],
	
	data(){
		return{
			isvisible: true
		}
	},
	
	template: `
	<article class="message is-medium" 
	v-show='isvisible'>
		 <div class="message-header">
			<p>{{title}}</p>
			<button class="delete" aria-label="delete" @click='hidemsg'></button>
		 </div>
		 <div class="message-body">
			{{ body }} 
		 </div>
	</article>
	`,
	methods: {
		hidemsg(){
			this.isvisible = false;
		}
	}
});


new Vue({
	el: main
});