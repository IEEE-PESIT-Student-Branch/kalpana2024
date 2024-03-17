#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

struct Node {
    struct Node *left, *right;
    int key;
};

// create new tree Node
struct Node* newNode(int key) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    temp->key = key;
    temp->left = temp->right = NULL;
    return temp;
}

// insert a node in binary tree
struct Node* insertNode(struct Node* root, int key) {
    if (root == NULL)
        return newNode(key);

    struct Node* temp;
    int front = 0, rear = 0;
    struct Node* queue[100];  // Queue traversal at max 100 nodes
    queue[rear++] = root;

    while (front < rear) {
        temp = queue[front++];

        if (temp->left) {
            queue[rear++] = temp->left;
        } else {
            temp->left = newNode(key);
            return root;
        }

        if (temp->right) {
            queue[rear++] = temp->right;
        } else {
            temp->right = newNode(key);
            return root;
        }
    }
    return root;
}

// construct a binary tree from an array
struct Node* constructBinaryTree(int arr[], int n) {
    struct Node* root = NULL;

    for (int i = 0; i < n; i++) {
        root = insertNode(root, arr[i]);
    }

    return root;
}

// Lowest Common Ancestor of given values n1 and n2.
struct Node* findLCA(struct Node* root, int n1, int n2) {
    if (root == NULL)
        return NULL;

    if (root->key == n1 || root->key == n2)
        return root;

    struct Node* left_lca = findLCA(root->left, n1, n2);
    struct Node* right_lca = findLCA(root->right, n1, n2);

    if (left_lca && right_lca)
        return root;

    return (left_lca != NULL) ? left_lca : right_lca;
}

// count the number of turns
bool CountTurn(struct Node* root, int key, bool turn, int* count) {
    if (root == NULL)
        return false;

    if (root->key == key)
        return true;

    if (turn == true) {
        if (CountTurn(root->left, key, turn, count))
            return true;
        if (CountTurn(root->right, key, !turn, count)) {
            *count += 1;
            return true;
        }
    } else {
        if (CountTurn(root->right, key, turn, count))
            return true;
        if (CountTurn(root->left, key, !turn, count)) {
            *count += 1;
            return true;
        }
    }
    return false;
}

// number of turns between two nodes in a binary tree
int NumberOfTurns(struct Node* root, int source, int dest) {
    struct Node* LCA = findLCA(root, source, dest);

    if (LCA == NULL)
        return -1;

    int Count = 0;

    if (LCA->key != source && LCA->key != dest) {
        if (CountTurn(LCA->right, dest, false, &Count) || CountTurn(LCA->left, dest, true, &Count))
            ;
        if (CountTurn(LCA->left, source, true, &Count) || CountTurn(LCA->right, source, false, &Count))
            ;
        return Count + 1;
    }

    if (LCA->key == source) {
        CountTurn(LCA->right, dest, false, &Count);
        CountTurn(LCA->left, dest, true, &Count);
        return Count;
    } else {
        CountTurn(LCA->right, source, false, &Count);
        CountTurn(LCA->left, source, true, &Count);
        return Count;
    }
}

int main() {
    int n;
    scanf("%d", &n);  // number of nodes

    int arr[n];  // enter nodes in order
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    struct Node* root = constructBinaryTree(arr, n);

    int source, dest;
    scanf("%d %d", &source, &dest);  // enter source and destination number

    int turns = NumberOfTurns(root, source, dest);
    if (turns != -1)
        printf("%d\n", turns);

    return 0;
}
