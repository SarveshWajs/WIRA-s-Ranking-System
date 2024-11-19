axios.get('http://localhost:3000/scores')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

const app = Vue.createApp({
    data() {
        return {
            players: [],
            search: '',
            currentPage: 1,
            totalPages: 0,
            pageSize: 10,
            loading: false, // New loading state
            error: null, // New error state
              // Existing states...
        sortKey: 'score', // Default sort column
        sortOrder: 'desc', // Default sort order
        };
    },
    methods: {
        
        async fetchPlayers() {
            this.loading = true; // Start loading
            this.error = null; // Clear previous errors
            try {
                console.log('Search term:', this.search); // Debug log
                const response = await axios.get(`http://localhost:3000/scores`, {
                    params: {
                        page: this.currentPage,
                        limit: this.pageSize,
                        search: this.search.trim(), // Trim unnecessary spaces
                    },
                });
                console.log('API Response:', response.data); // Debug log
                this.players = response.data.data;
                this.totalPages = Math.ceil(response.data.total / this.pageSize);
            } catch (error) {
                console.error('Error fetching players:', error);
                this.error = 'Failed to load player data. Please try again later.';
            } finally {
                this.loading = false; // End loading
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.fetchPlayers();
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.fetchPlayers();
            }
        },
        searchPlayers() {
            this.currentPage = 1;
            this.fetchPlayers();
        },
    },
    mounted() {
        this.fetchPlayers();
    },
});

app.mount('#app');
