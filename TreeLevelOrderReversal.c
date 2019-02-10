void printGivenLevel(struct node *root, int level);

int height(struct node *node);

void levelOrder( struct node *root) {
  int h = height(root);
  int i;
  for (i = 1; i <= h; i++)
    printGivenLevel(root, i);
}

void printGivenLevel(struct node *root, int level) {
  if (root == NULL)
    return;
  if (level == 1)
    printf("%d ", root->data);
  else if (level > 1) {
    printGivenLevel(root->left, level - 1);
    printGivenLevel(root->right, level - 1);
  }
}

int height(struct node *node) {
  if (node == NULL)
    return 0;
  else {
    /* compute the height of each subtree */
    int lheight = height(node->left);
    int rheight = height(node->right);

    /* use the larger one */
    if (lheight > rheight)
      return (lheight + 1);
    else
      return (rheight + 1);
  }
}