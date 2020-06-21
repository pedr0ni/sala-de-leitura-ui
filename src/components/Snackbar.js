const Snackbar = {

    show(message = '', buttonText = 'OK', timeout = 6000, callback = () => {}) {
        let snackbar = document.createElement('div')
        snackbar.className = 'snackbar'
        snackbar.isCLosed = false

        let holder = document.createElement('div')
        holder.className = 'snackbar-holder'

        let content = document.createElement('p')
        content.className = 'snackbar-message'
        content.innerHTML = message

        let button = document.createElement('button')
        button.className = 'snackbar-button text-button ripple'
        button.innerHTML = buttonText

        holder.appendChild(content)

        snackbar.appendChild(holder)
        snackbar.appendChild(button)

        document.getElementById('app').appendChild(snackbar)

        const close = () => {
            if (snackbar.isCLosed) return
            snackbar.isCLosed = true
            snackbar.style.top = '-50px'
            snackbar.style.opacity = 0
            setTimeout(() => {
                snackbar.remove()
            }, 600) // Effect time + 100ms
        }

        button.addEventListener('click', (event) => {
            close()
            callback()
        })

        setTimeout(() => {
            close()
        }, timeout)
    }

}

export default Snackbar