document.addEventListener('DOMContentLoaded', function() {
  // 絞り込み条件の要素を取得
  const areaTags = document.querySelectorAll('.js-area input[type="checkbox"]');
  const categoryTags = document.querySelectorAll('.js-category input[type="checkbox"]');

  // 絞り込み条件が変更された時の処理
  function handleFilterChange() {
    // 選択されたAreaとCategoryの値を取得
    const selectedAreas = getSelectedValues(areaTags);
    const selectedCategories = getSelectedValues(categoryTags);

    // 絞り込み対象の要素を取得
    const items = document.querySelectorAll('.js-item');

    let hasVisibleItems = false; // 表示されている要素があるかを示すフラグ

    // 絞り込み対象の要素をループして表示/非表示を切り替える
    items.forEach(item => {
      const area = item.getAttribute('data-area');
      const categories = JSON.parse(item.getAttribute('data-category'));

      // AreaとCategoryのいずれかが選択されていない場合は表示する
      if ((selectedAreas.length === 0 || selectedAreas.includes(area)) &&
          (selectedCategories.length === 0 || selectedCategories.every(category => categories.includes(category)))) {
        item.classList.remove('is-hidden');
        hasVisibleItems = true; // 表示されている要素があることを示すフラグを立てる
      } else {
        item.classList.add('is-hidden');
      }
    });

    // 「条件に合致する物件はありません。」の表示/非表示を切り替える
    const noItemsMessage = document.querySelector('.js-noItems');
    if (hasVisibleItems) {
      noItemsMessage.classList.add('is-hidden');
    } else {
      noItemsMessage.classList.remove('is-hidden');
    }
  }

  // 選択されたチェックボックスの値を取得するヘルパー関数
  function getSelectedValues(checkboxes) {
    const selectedValues = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });
    return selectedValues;
  }

  // 絞り込み条件の変更イベントを監視
  areaTags.forEach(tag => {
    tag.addEventListener('change', function() {
      const tagContainer = tag.closest('.js-tag');
      if (tag.checked) {
        tagContainer.classList.add('is-active');
      } else {
        tagContainer.classList.remove('is-active');
      }
      handleFilterChange();
    });
  });

  categoryTags.forEach(tag => {
    tag.addEventListener('change', function() {
      const tagContainer = tag.closest('.js-tag');
      if (tag.checked) {
        tagContainer.classList.add('is-active');
        handleFilterChange();
      } else {
        tagContainer.classList.remove('is-active');
        handleFilterChange();
      }
    });
  });

  // 初期表示時に絞り込みを実行
  handleFilterChange();
});
