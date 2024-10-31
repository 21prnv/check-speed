export interface CodeSnippet {
  title: string;
  code: string;
  estimatedTime: number; // in seconds
}

export type Language = "javascript" | "python" | "java" | "cpp" | "c";

// Define code snippets for each language
export const codeSnippets: Record<Language, CodeSnippet[]> = {
  javascript: [
    {
      title: "Quick Sort Implementation",
      code: `function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}`,
      estimatedTime: 60,
    },
    {
      title: "Fibonacci Sequence",
      code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
      estimatedTime: 30,
    },
    {
      title: "Binary Search in JavaScript",
      code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; 
}`,
      estimatedTime: 60,
    },
  ],
  python: [
    {
      title: "Quick Sort in Python",
      code: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)`,
      estimatedTime: 45,
    },
    {
      title: "List Comprehension",
      code: `squares = [x**2 for x in range(10) if x % 2 == 0]`,
      estimatedTime: 20,
    },
    {
      title: "Binary Search in Python",
      code: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) 

        if arr[mid] == target:
            return mid  
        elif arr[mid] < target:
            left = mid + 1  
        else:
            right = mid - 1  

    return -1`,
      estimatedTime: 20,
    },
  ],
  java: [
    {
      title: "Java Quick Sort",
      code: `public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

private static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}`,
      estimatedTime: 90,
    },
    {
      title: "Java Stream Example",
      code: `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
List<Integer> evenSquares = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .collect(Collectors.toList());`,
      estimatedTime: 40,
    },
    {
      title: "Binary Search in Java",
      code: `public static int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}`,
      estimatedTime: 60,
    },
  ],
  c: [
    {
      title: "Bubble Sort in C",
      code: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
      estimatedTime: 60,
    },
    {
      title: "Fibonacci Series in C",
      code: `#include <stdio.h>

void fibonacci(int n) {
    int a = 0, b = 1, next;
    printf("Fibonacci Series: ");
    
    for (int i = 0; i < n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
}`,
      estimatedTime: 45,
    },
    {
      title: "Check Prime Number in C",
      code: `#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`,
      estimatedTime: 30,
    },
    {
      title: "Factorial in C",
      code: `#include <stdio.h>

int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}`,
      estimatedTime: 30,
    },
    {
      title: "Find Maximum Element in Array in C",
      code: `#include <stdio.h>

int findMax(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
      estimatedTime: 40,
    },
    {
      title: "Count Vowels in a String in C",
      code: `#include <stdio.h>
#include <string.h>

int countVowels(char *str) {
    int count = 0;
    for (int i = 0; i < strlen(str); i++) {
        char ch = str[i];
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
            count++;
        }
    }
    return count;
}`,
      estimatedTime: 50,
    },
    {
      title: "Reverse a String in C",
      code: `#include <stdio.h>
#include <string.h>

void reverseString(char *str) {
    int n = strlen(str);
    for (int i = 0; i < n / 2; i++) {
        char temp = str[i];
        str[i] = str[n - i - 1];
        str[n - i - 1] = temp;
    }
}`,
      estimatedTime: 30,
    },
    {
      title: "Merge Two Sorted Arrays in C",
      code: `#include <stdio.h>

void merge(int arr1[], int n1, int arr2[], int n2, int arr3[]) {
    int i = 0, j = 0, k = 0;
    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            arr3[k++] = arr1[i++];
        } else {
            arr3[k++] = arr2[j++];
        }
    }
    while (i < n1) arr3[k++] = arr1[i++];
    while (j < n2) arr3[k++] = arr2[j++];
}`,
      estimatedTime: 50,
    },
    {
      title: "Calculate Power of a Number in C",
      code: `#include <stdio.h>

double power(double base, int exp) {
    if (exp == 0) return 1;
    if (exp < 0) return 1 / power(base, -exp);
    return base * power(base, exp - 1);
}`,
      estimatedTime: 40,
    },
    {
      title: "Find GCD of Two Numbers in C",
      code: `#include <stdio.h>

int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}`,
      estimatedTime: 25,
    },
    {
      title: "Check Armstrong Number in C",
      code: `#include <stdio.h>
#include <math.h>

int isArmstrong(int n) {
    int original = n, sum = 0, digits = 0;

    while (original != 0) {
        digits++;
        original /= 10;
    }

    original = n;
    while (original != 0) {
        int remainder = original % 10;
        sum += pow(remainder, digits);
        original /= 10;
    }

    return sum == n;
}`,
      estimatedTime: 50,
    },
    {
      title: "Remove Duplicates from an Array in C",
      code: `#include <stdio.h>

int removeDuplicates(int arr[], int n) {
    if (n == 0 || n == 1) return n;

    int temp[n];
    int j = 0;
    for (int i = 0; i < n - 1; i++) {
        if (arr[i] != arr[i + 1]) {
            temp[j++] = arr[i];
        }
    }
    temp[j++] = arr[n - 1];

    for (int i = 0; i < j; i++) {
        arr[i] = temp[i];
    }

    return j;
}`,
      estimatedTime: 60,
    },
    {
      title: "Check Palindrome in C",
      code: `#include <stdio.h>
#include <string.h>

int isPalindrome(char str[]) {
    int n = strlen(str);
    for (int i = 0; i < n / 2; i++) {
        if (str[i] != str[n - i - 1]) return 0;
    }
    return 1;
}`,
      estimatedTime: 30,
    },
    {
      title: "Find Length of a String in C",
      code: `#include <stdio.h>

int stringLength(char *str) {
    int length = 0;
    while (*str++) length++;
    return length;
}`,
      estimatedTime: 25,
    },
    {
      title: "Implement Queue using Array in C",
      code: `#include <stdio.h>
#define MAX 100

struct Queue {
    int items[MAX];
    int front, rear;
};

void initQueue(struct Queue* q) {
    q->front = -1;
    q->rear = -1;
}

int isFull(struct Queue* q) {
    return q->rear == MAX - 1;
}

int isEmpty(struct Queue* q) {
    return q->front == -1;
}

void enqueue(struct Queue* q, int value) {
    if (isFull(q)) {
        printf("Queue is full\\n");
        return;
    }
    if (q->front == -1) q->front = 0;
    q->rear++;
    q->items[q->rear] = value;
}

int dequeue(struct Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty\\n");
        return -1;
    }
    int item = q->items[q->front];
    if (q->front >= q->rear) q->front = q->rear = -1;
    else q->front++;
    return item;
}`,
      estimatedTime: 90,
    },
  ],

  cpp: [
    {
      title: "Binary Search in C++",
      code: `#include <vector>

int binarySearch(const std::vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1; // Not found
}`,
      estimatedTime: 60,
    },
    {
      title: "Reverse a String in C++",
      code: `#include <string>
#include <algorithm>

std::string reverseString(std::string str) {
    std::reverse(str.begin(), str.end());
    return str;
}`,
      estimatedTime: 25,
    },
    {
      title: "Find Maximum Element in Array (C++)",
      code: `#include <vector>
#include <algorithm>

int findMax(const std::vector<int>& arr) {
    if (arr.empty()) {
        throw std::runtime_error("Array is empty");
    }
    return *std::max_element(arr.begin(), arr.end());
}`,
      estimatedTime: 30,
    },
    {
      title: "Find GCD of Two Numbers (C++)",
      code: `#include <iostream>

int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}`,
      estimatedTime: 30,
    },
    {
      title: "Check if String is Palindrome (C++)",
      code: `#include <string>

bool isPalindrome(const std::string& str) {
    int left = 0, right = str.size() - 1;
    while (left < right) {
        if (str[left++] != str[right--]) return false;
    }
    return true;
}`,
      estimatedTime: 30,
    },
    {
      title: "Implement Stack using STL in C++",
      code: `#include <stack>

class Stack {
public:
    void push(int value) {
        s.push(value);
    }
    void pop() {
        if (!s.empty()) s.pop();
    }
    int top() {
        return s.top();
    }
    bool isEmpty() {
        return s.empty();
    }
private:
    std::stack<int> s;
}`,
      estimatedTime: 40,
    },
    {
      title: "Count Occurrences of an Element in C++",
      code: `#include <vector>
#include <algorithm>

int countOccurrences(const std::vector<int>& arr, int target) {
    return std::count(arr.begin(), arr.end(), target);
}`,
      estimatedTime: 25,
    },
    {
      title: "Implement Queue using STL in C++",
      code: `#include <queue>

class Queue {
public:
    void enqueue(int value) {
        q.push(value);
    }
    void dequeue() {
        if (!q.empty()) q.pop();
    }
    int front() {
        return q.front();
    }
    bool isEmpty() {
        return q.empty();
    }
private:
    std::queue<int> q;
}`,
      estimatedTime: 40,
    },
    {
      title: "Implement Linked List in C++",
      code: `#include <iostream>

class Node {
public:
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class LinkedList {
public:
    Node* head;
    LinkedList() : head(nullptr) {}
    
    void insert(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
        } else {
            Node* temp = head;
            while (temp->next) temp = temp->next;
            temp->next = newNode;
        }
    }
}`,
      estimatedTime: 60,
    },
    {
      title: "Merge Two Sorted Lists in C++",
      code: `#include <iostream>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1->val < l2->val) {
        l1->next = mergeTwoLists(l1->next, l2);
        return l1;
    } else {
        l2->next = mergeTwoLists(l1, l2->next);
        return l2;
    }
}`,
      estimatedTime: 70,
    },
    {
      title: "Find the Length of a Linked List in C++",
      code: `#include <iostream>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

int length(ListNode* head) {
    int len = 0;
    while (head) {
        len++;
        head = head->next;
    }
    return len;
}`,
      estimatedTime: 35,
    },
    {
      title: "Implement a Simple Calculator in C++",
      code: `#include <iostream>

class Calculator {
public:
    int add(int a, int b) { return a + b; }
    int subtract(int a, int b) { return a - b; }
    int multiply(int a, int b) { return a * b; }
    double divide(int a, int b) {
        if (b == 0) throw std::invalid_argument("Division by zero");
        return static_cast<double>(a) / b;
    }
}`,
      estimatedTime: 50,
    },
    {
      title: "Remove Duplicates from a Vector in C++",
      code: `#include <vector>
#include <algorithm>

void removeDuplicates(std::vector<int>& vec) {
    std::sort(vec.begin(), vec.end());
    vec.erase(std::unique(vec.begin(), vec.end()), vec.end());
}`,
      estimatedTime: 40,
    },
    {
      title: "Swap Two Numbers in C++",
      code: `#include <iostream>

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}`,
      estimatedTime: 20,
    },
    {
      title: "Check for Anagrams in C++",
      code: `#include <string>
#include <algorithm>

bool areAnagrams(const std::string& str1, const std::string& str2) {
    std::string sortedStr1 = str1;
    std::string sortedStr2 = str2;
    std::sort(sortedStr1.begin(), sortedStr1.end());
    std::sort(sortedStr2.begin(), sortedStr2.end());
    return sortedStr1 == sortedStr2;
}`,
      estimatedTime: 30,
    },
    {
      title: "Sort a Vector in C++",
      code: `#include <vector>
#include <algorithm>

void sortVector(std::vector<int>& vec) {
    std::sort(vec.begin(), vec.end());
}`,
      estimatedTime: 30,
    },
    {
      title: "Calculate Factorial using Recursion in C++",
      code: `#include <iostream>

int factorial(int n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
}`,
      estimatedTime: 30,
    },
    {
      title: "Check Prime Number in C++",
      code: `#include <iostream>

int cnt = 0;
for(int i=1; i*i<=n; i++){
   if(n % i == 0){
      cnt++;
      if(n/i != i) cnt++;
   }
}
return cnt == 2;`,
      

estimatedTime: 30,
    },
  ],
};
