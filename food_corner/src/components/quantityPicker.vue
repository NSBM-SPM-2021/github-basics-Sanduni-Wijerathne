<template>
    <div class="rowS">   
        <p>Quantity</p>
        <input type="number" min="1" max="10">
    </div>
</template>

<script>
export default {
  name: "quantityPicker",
};
</script>

<style scoped>
    .rowS{
        display: flex;
        justify-content: space-between;

    }
    p{
        margin-right: 20px;
    }
</style>
