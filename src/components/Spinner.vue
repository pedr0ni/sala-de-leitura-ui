<template>
    <svg class="spinner" :width="`${currentSize}px`" :height="`${currentSize}px`" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle :class="`path ${hasColor ? 'colors' : 'noColor'}`" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
</template>

<script>
export default {
	props: {
		size: String,
		hasColor: Boolean,
	},
	data() {
		return {
			sizes: {
				'small': 16,
				'medium': 32,
				'large': 64
			},
			currentSize: 0
		}
	},
	beforeMount() {
		if (this.size)
			this.currentSize = this.sizes[this.size] 
		else
			this.currentSize = 0
	}
}
</script>

<style scoped>
.spinner {
	animation: rotator 1.4s linear infinite;
}

@-webkit-keyframes rotator {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(270deg);
	}
}

@keyframes rotator {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(270deg);
	}
}
.path {
	stroke-dasharray: 187;
	stroke-dashoffset: 0;
	transform-origin: center;
}

.path.colors {
	animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
}

.path.noColor {
	animation: dash 1.4s ease-in-out infinite, noColor 5.6s ease-in-out infinite;
}

@keyframes noColor {
	from {
		stroke: #FFF;
	}
	to {
		stroke: #FFF;
	}
}

@keyframes colors {
	0% {
		stroke: #4285F4;
	}
	25% {
		stroke: #DE3E35;
	}
	50% {
		stroke: #F7C223;
	}
	75% {
		stroke: #1B9A59;
	}
	100% {
		stroke: #4285F4;
	}
}
@-webkit-keyframes dash {
	0% {
		stroke-dashoffset: 187;
	}
	50% {
		stroke-dashoffset: 46.75;
		transform: rotate(135deg);
	}
	100% {
		stroke-dashoffset: 187;
		transform: rotate(450deg);
	}
}
@keyframes dash {
	0% {
		stroke-dashoffset: 187;
	}
	50% {
		stroke-dashoffset: 46.75;
		transform: rotate(135deg);
	}
	100% {
		stroke-dashoffset: 187;
		transform: rotate(450deg);
	}
}

</style>