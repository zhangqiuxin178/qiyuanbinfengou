export const getDetail = (itemId, actorId) => {
    this.$router.push({
        path: '/detail',
        query: { itemId, actorId }
    })
}